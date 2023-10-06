import { Link } from "react-router-dom";
import db from "../Database";
import styles from './Dashboard.module.css'; 

function Dashboard() {
  const numCourses = db.courses.length;
  return (
    <div>
      <div className={styles.breadcrumb}>
        <h1>
        Dashboard
        </h1>
      </div>
      <hr></hr>
      <div className={styles.pubcourses}>
        Published Courses ({numCourses})
      </div>
      <div className={styles.courseGrid}>
        {db.courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className={styles.courseCard}>
            <img src={course.image} alt={course.name} className={styles.courseImage}/>
            <div className={styles.courseInfo}>
              <h2 className={styles.courseName}>{course.name}</h2>
              <p className={styles.courseNumber}>{course.number}</p>
              <p className={styles.courseDates}>{course.startDate} - {course.endDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
