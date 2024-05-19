import Header from "../Header/Header"
import "./MyCourses.css"
import CourseCard from "../CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import noData from "../../assets/Course-not-Found.jpg"
import { useState } from "react";

function MyCourses() {
  const navigate = useNavigate();
  const MyCoursesList = useSelector((state) => state.MyCoursesList.value);

  const [filteredCourses, setFilteredCourses] = useState(MyCoursesList);

  const handleSearchFeature = (e) => {
    const searchValue = e.target.value;
    const x = MyCoursesList.filter((course) => {
      return course.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredCourses(x);
  }

  return (
    <div className="myCourses">
      <Header />
      <div className="searchClass">
        <input type="text" className="searchInput" placeholder="Search course" onChange={handleSearchFeature}/>
      </div>
      {
        filteredCourses.length === 0 && <div className="noDataDivv">
          <img className="noDataImgg" src={noData} alt="" />
        </div>
      }
      <div className="registeredCourses">
        {filteredCourses.map((course) => {
          return (
            <div className="allCoursesCards" key={course.id} onClick={() => navigate(`/mycourses/${course.id}`)}>
              <CourseCard course={course} myCourses={true} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MyCourses
