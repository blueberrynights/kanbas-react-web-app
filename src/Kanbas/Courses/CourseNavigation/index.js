import { Link, useParams, useLocation } from "react-router-dom";
import styles from './CourseNavigation.module.css';

function CourseNavigation() {
  const links = [
    "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Grades",
    "People", "Panopto Video", "Discussions", "Announcements", "Pages", 
    "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus"
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className={styles.listGroup} style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`${styles.listGroupItem} ${pathname.includes(link) ? styles.active : ""}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
