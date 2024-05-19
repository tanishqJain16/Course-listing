import { useSelector } from "react-redux";
import Courses from "../../Components/Courses/Courses";
import MyCourses from "../../Components/MyCourses/MyCourses";

function Home() {
    const selectedTab = useSelector((state) => state.tab.value);
    return (
        <div>
            {
                selectedTab === 'allCourses' ? <Courses /> : <MyCourses />
            }
        </div>
    )
}

export default Home
