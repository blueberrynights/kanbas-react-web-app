// import { Link } from "react-router-dom";
// import db from "../Database";
// import styles from './Dashboard.module.css'; 

// function Dashboard() {
//   const numCourses = db.courses.length;
//   return (
//     <div>
//       <div className={styles.breadcrumb}>
//         <h1>
//         Dashboard
//         </h1>
//       </div>
//       <hr></hr>
//       <div className={styles.pubcourses}>
//         Published Courses ({numCourses})
//       </div>
//       <div className={styles.courseGrid}>
//         {db.courses.map((course) => (
//           <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className={styles.courseCard}>
//             <img src={course.image} alt={course.name} className={styles.courseImage}/>
//             <div className={styles.courseInfo}>
//               <h2 className={styles.courseName}>{course.name}</h2>
//               <p className={styles.courseNumber}>{course.number}</p>
//               <p className={styles.courseDates}>{course.startDate} - {course.endDate}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import styles from './Dashboard.module.css'; 
import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {

  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    <div>
      <div className={styles.breadcrumb}>
        <h1>
        Dashboard
        </h1>
      </div>
      <hr></hr>
      <div className={styles.pubcourses}>
        Published Courses ({courses.length})
      </div>

      <div className={styles.container}>
        <h5>Course</h5>
        <input value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
              
        <button type="button" class="btn btn-success" onClick={addNewCourse}>Add</button>
        <button type="button" class="btn btn-primary" onClick={updateCourse}>Update</button>

        <div className="list-group">
          {courses.map((course) => (
            <Link key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="list-group-item">

              <button type="button" class="btn btn-warning" 
              onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>Edit</button>

              <button type="button" class="btn btn-danger" 
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>Delete</button>

              {course.name}
            </Link>
          ))}
        </div>
      </div>

    </div>

  );
}


export default Dashboard;

