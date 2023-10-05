import { Link } from "react-router-dom";
import db from "../Database";
import './styles.css'; // import the CSS for styling

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="course-grid">
        {db.courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="course-card">
            <img src={course.image} alt={course.name} className="course-image" />
            <div className="course-info">
              <h2 className="course-name">{course.name}</h2>
              <p className="course-number">{course.number}</p>
              <p className="course-dates">{course.startDate} - {course.endDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
