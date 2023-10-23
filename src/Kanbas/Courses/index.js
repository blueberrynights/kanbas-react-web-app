import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from './Courses.module.css';

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  
  // Get the current location using useLocation hook
  const location = useLocation();

  // Define a function to get the breadcrumb text based on the current route
  const getBreadcrumbText = () => {
    const path = location.pathname;
    const curr = path.split("/");
    const page = curr[curr.length-1];
    if (page === "Home") {
      return "Home";
    } else if (page === "Modules") {
      return "Modules";
    } else if (page === "Assignments") {
      return "Assignments";
    }
  };

  // Get the breadcrumb text based on the current route
  const breadcrumbText = getBreadcrumbText();

  return (
    <div>
      <div className={styles.breadcrumb}>
        <h1>
          <FontAwesomeIcon icon={faBars} className={styles.breadcrumbIcon} />
          {course.name} &gt; {breadcrumbText}
        </h1>
      </div>
      <hr style={{ width: '100%' }} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "280px",
            top: "80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
