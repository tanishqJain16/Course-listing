import "./EachCourse.css"
// import courses from "../../Courses"
import { FaStar } from "react-icons/fa";
import BackButton from "../BackButton/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { enroll, setMyCoursesList } from "../../Store/Store";

function EachCourse() {
  const id = window.location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.allCourses.value);
  const currentUserId = useSelector((state) => state.currentUserId.value);

  const handleUpdateMyCoursesList = (course) => {
    dispatch(enroll(course.id));
    dispatch(setMyCoursesList(course));
  }

  return (
    <div>
      <BackButton />
      {
        allCourses.map((course) => {
          if (course.id === parseInt(id)) {
            return (
              <div className="eachCourse" key={course.id}>
                <div className="eachCourseRow">
                  <img src={course.thumbnail} alt={course.title} />
                  <div className="details">
                    <h2>{course.name}</h2>
                    <p className="instructor">by {course.instructor}</p>
                    <p className="desc">{course.description}</p>
                    <div className="ratings">
                      <div className="stars">
                        {
                          Array.from({ length: course.rating }, (_, i) => (
                            <FaStar key={i} color="#F3B604" />
                          ))
                        }
                        {
                          Array.from({ length: 5 - course.rating }, (_, i) => (
                            <FaStar key={i} color="#D3D3D3" />
                          ))
                        }
                      </div>
                      <p>({course.reviews} reviews)</p>
                    </div>
                  </div>
                  <div className="timings">
                    <div className="starting">
                      {course.starts}
                    </div>
                    <div className="location">
                      {course.location}
                    </div>
                    {
                      !course.students.includes(currentUserId) ? <button className="enrollBtn" style={{
                        backgroundColor: course.enrollmentStatus == 'Open' ? '#4CAF50' : course.enrollmentStatus == 'In Progress' ? '#FFA500' : '#FF0000',
                        cursor: course.enrollmentStatus === 'Closed' || course.enrollmentStatus === 'In Progress' ? 'not-allowed' : 'pointer'
                      }} onClick={() => handleUpdateMyCoursesList(course)} disabled={course.enrollmentStatus === 'Closed' || course.enrollmentStatus === 'In Progress'}>
                        Enrollment {course.enrollmentStatus}
                      </button> : <button disabled className="enrolledBtn">Enrolled</button>
                    }
                    {
                      !course.students.includes(currentUserId) && <div className="disclaimerCheckboxArea">
                        <input type="checkbox" name="disclaimer" id="diclaimer" />
                        <label htmlFor="disclaimer">I would like to receive marketing emails from Coding Academy.</label>
                      </div>
                    }
                  </div>
                </div>
                <div className="eachCourseRow2">
                  <div className="weeklyDesc">
                    <h2>About Course</h2>
                    {
                      course.syllabus.map((week) => (
                        <div className="weeklyDetails" key={week.week}>
                          <h3 className="weekNumber">Week {week.week}</h3>
                          <h4 className="weekTopic">{week.topic}</h4>
                          <p className="weekContent">{week.content}</p>
                        </div>
                      ))

                    }
                  </div>
                  <div className="otherDetails">
                    <h2>Other Details</h2>
                    <div className="extraDetails">
                      <p><strong>Duration:</strong> {course.syllabus.length} weeks</p>
                      <p><strong>Schedule:</strong> {course.schedule}</p>
                      <p><strong>Location:</strong> {course.location}</p>
                      <p><strong>Prerequisites:</strong> {course.prerequisites.join(", ")}</p>
                      <p><strong>No. of enrollments:</strong> {course.students.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return null
        })
      }
    </div>
  )
}

export default EachCourse
