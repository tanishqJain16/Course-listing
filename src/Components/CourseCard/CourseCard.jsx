import "./CourseCard.css"

function CourseCard(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <div className="coursesCard" key={props.course.id}>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={props.course.thumbnail} alt={props.course.title} />
            <div className="details">
                {/* eslint-disable-next-line react/prop-types */}
                <h2>{props.course.name}</h2>
                {/* eslint-disable-next-line react/prop-types */}
                <p>{props.course.description}</p>
                <div className="fullProgression">
                    {
                        // eslint-disable-next-line react/prop-types 
                        props.myCourses && <div className="progressionBar">
                            {/* eslint-disable-next-line react/prop-types */}
                            <div className="progress" style={{ width: `${props.course.progress}%` }}></div>
                        </div>
                    }
                    {// eslint-disable-next-line react/prop-types 
                        props.myCourses && <div className="percentage">{props.course.progress} %</div>
                    }
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="instructor"><strong>Instructor:</strong> {props.course.instructor}</p>
            </div>
        </div>
    )
}

export default CourseCard
