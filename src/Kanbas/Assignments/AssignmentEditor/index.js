import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../Database";
import { Link } from "react-router-dom";
import styles from "./AssignmentEdit.module.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className={styles.container}>
      <h4>Assignment Name</h4>
      <input value={assignment.title}
        className="form-control mb-2" />

      <div className={styles.cancelSave}>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary">
          Cancel
        </Link>
        <div className={styles.saveBut}>
          <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
        </div>
        
      </div>

    </div>
  );
}


export default AssignmentEditor;