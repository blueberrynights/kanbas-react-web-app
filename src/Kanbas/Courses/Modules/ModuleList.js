// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import db from "../../Database";
// import styles from "./Modules.module.css"; // Import styles from Modules.module.css
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the icon library you're using
// import { faAngleDown, faNewspaper, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup';
// import { useContext } from 'react';
// import AccordionContext from 'react-bootstrap/AccordionContext';
// import { useAccordionButton } from 'react-bootstrap/AccordionButton';
// import Card from 'react-bootstrap/Card';

// function ContextAwareToggle({ children, eventKey, callback, name, description }) {
//   const { courseId } = useParams();
//   const assignments = db.assignments;
//   const courseAssignments = assignments.filter(
//     (assignment) => assignment.course === courseId);
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey),
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;

//   return (
//     <li className={`list-group-item ${styles.noOutline} text-left`}>
//       <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`} onClick={decoratedOnClick}>
//         <div className={styles.assignmentHeader}>
//           <FontAwesomeIcon icon={faAngleDown}/>
//           <div className={styles.aHeader}>
//             <div>{name}</div>
//             <div>{description}</div>
//           </div>
//         </div>
//       </Button>
//     </li>
//   );
// }
// function ModuleList() {
//   const { courseId } = useParams();
//   const modules = db.modules.filter((module) => module.course === courseId);

//   // State to track the expanded sections
//   const [expandedSections, setExpandedSections] = useState({});

//   // Function to toggle the expansion of a section
//   const toggleSection = (index) => {
//     setExpandedSections((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <div>
//       {modules.map((module, index) => (
//             <Accordion defaultActiveKey="0" className={styles.header}>
//             <Card>
//               <Card.Header>
//                 <ContextAwareToggle eventKey="0" name={module.name} description={module.description}></ContextAwareToggle>
//               </Card.Header>
        
//               <Accordion.Collapse eventKey="0">
//                 <Card.Body className={styles.container}>
//                   {modules.map((module, index) => (
//                     <Card.Body className={styles.assignmentItem}>
//                     <ListGroup.Item key={module._id} className={styles.outlinedListItem}>
//                       <FontAwesomeIcon icon={faNewspaper} className={styles.assignmentIcon}/>
        
//                       <div className={styles.assignmentName}>
//                         <Link
//                             to={`/Kanbas/Courses/${courseId}/Assignments/${module._id}`}
//                             className={"list-group-item"}
//                           >
//                             Subsection
//                         </Link>
//                       </div>
//                       {/* <FontAwesomeIcon icon={faCircleCheck} className={styles.check}/> */}
                      
//                     </ListGroup.Item>
//                     </Card.Body>
//                   ))}
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           </Accordion>
//       ))}
//     </div>
//   );
// }

// export default ModuleList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };




  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button type="button" class="btn btn-success"
          onClick={handleAddModule}>
          Add
        </button>
        <button type="button" class="btn btn-primary"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input class="form-control" type="text"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea class="form-control" type="text"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button type="button" class="btn btn-warning"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button type="button" class="btn btn-danger"
              onClick={handleDeleteModule(module._id)}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
