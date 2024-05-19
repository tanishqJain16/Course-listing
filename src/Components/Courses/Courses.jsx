import "./Courses.css"
import courses from "../../Courses"
import Header from "../Header/Header"
import { useState } from "react";
import notFound from "../../assets/Course-not-Found.jpg"
import CourseCard from "../CourseCard/CourseCard";
import { useNavigate } from "react-router-dom";

function Courses() {
    const [coursess, setCoursess] = useState(courses)
    const navigate = useNavigate()
    const navigateToEachCourse = (id) => {
        navigate(`/allcourses/${id}`)
    }
    const handleSearchFeature = (e) => {
        const searchValue = e.target.value
        const filteredCourses = courses.filter((course) => {
            return course.name.toLowerCase().includes(searchValue.toLowerCase())
        })
        setCoursess(filteredCourses)
    }
    return (
        <>
            <Header />
            <div className="allCoursesPage">
                <div className="searchClass">
                    <input type="text" className="searchInput" placeholder="Search course" onChange={handleSearchFeature} />
                    {/* <FaSearch className="searchIcon" /> */}
                </div>
                <div className="notFoundDiv">
                    {
                        coursess.length === 0 && <img src={notFound} alt="" className="notFoundImg" />
                    }
                </div>
                {
                    coursess.map((course) => {
                        return (
                            <div className="allCoursesCards" style={{width:"100%"}} key={course.id}  onClick={() => navigateToEachCourse(course.id)}>
                                <CourseCard course={course} navigateToEachCourse={navigateToEachCourse} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Courses
