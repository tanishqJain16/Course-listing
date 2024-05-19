import "./MyCoursesDetail.css";
import { FaStar } from "react-icons/fa";
import BackButton from "../BackButton/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsCompletedAndProgress } from "../../Store/Store";
import noData from "../../assets/Course-not-Found.jpg";

function MyCoursesDetail() {
    const dispatch = useDispatch();
    const MyCourses = useSelector((state) => state.MyCoursesList.value);
    const id = parseInt(window.location.pathname.split("/")[2]);

    const toggleComplete = (weekNumber) => {
        dispatch(setIsCompletedAndProgress({ courseId: id, weekId: weekNumber }));
    };

    return (
        <div>
            <BackButton />
            {
                MyCourses.length === 0 && (
                    <div className="noDataDiv">
                        <img className="noDataImg" src={noData} alt="No Data" />
                    </div>
                )
            }
            {
                MyCourses.map((course) => {
                    if (course.id === id) {
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
                                                {Array.from({ length: course.rating }, (_, i) => (
                                                    <FaStar key={i} color="#F3B604" />
                                                ))}
                                                {Array.from({ length: 5 - course.rating }, (_, i) => (
                                                    <FaStar key={i} color="#D3D3D3" />
                                                ))}
                                            </div>
                                            <p>({course.reviews} reviews)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="eachCourseRow2">
                                    <div className="weeklyDesc">
                                        <h2>About Course</h2>
                                        {course.syllabus.map((week) => (
                                            <div className="weeklyDetails" key={week.week}>
                                                <h3 className="weekNumber">Week {week.week}</h3>
                                                <h4 className="weekTopic">{week.topic}</h4>
                                                <p className="weekContent">{week.content}</p>
                                                <button 
                                                    className="isDoneBtn" 
                                                    style={{ backgroundColor: week.isCompleted ? '#4CAF50' : '#FF0000' }} 
                                                    onClick={() => toggleComplete(week.week)}>
                                                    {week.isCompleted ? "Completed" : "Not Completed"}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="otherDetails">
                                        <h2>Other Details</h2>
                                        <div className="extraDetails">
                                            <p><strong>Duration:</strong> {course.syllabus.length} weeks</p>
                                            <p><strong>Schedule:</strong> {course.schedule}</p>
                                            <p><strong>Location:</strong> {course.location}</p>
                                            <p><strong>Prerequisites:</strong> {course.prerequisites.join(", ")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })
            }
        </div>
    );
}

export default MyCoursesDetail;
