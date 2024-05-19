import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { setTab } from '../../Store/Store'

function Header() {
    // const [selectedTab, setSelectedTab] = useState('allCourses');
    const selectedTab = useSelector((state) => state.tab.value);
    const dispatch = useDispatch();
    return (
        <div className='header'>
            <div className={`allCourses ${selectedTab==="allCourses"?"active":""}`} onClick={()=>dispatch(setTab('allCourses'))}>
                <h3>ALL COURSES</h3>
            </div>
            <div className={`myCoursesHeader ${selectedTab==="myCourses"?"active":""}`} onClick={()=>dispatch(setTab('myCourses'))}>
                <h3>MY COURSES</h3>
            </div>
        </div>
    )
}

export default Header
