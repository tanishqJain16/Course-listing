import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import EachCourse from './Components/EachCourse/EachCourse';
import Home from './Pages/Home/Home';
import MyCourses from './Components/MyCourses/MyCourses';
import MyCoursesDetail from './Components/MyCoursesDetail/MyCoursesDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allcourses/:id" element={<EachCourse />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/mycourses" element={<MyCourses/>} />
          <Route path="/mycourses/:id" element={<MyCoursesDetail/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
