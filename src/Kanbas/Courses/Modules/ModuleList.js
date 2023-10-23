import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";
import styles from "./Modules.module.css"; // Import styles from Modules.module.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the icon library you're using
import { faAngleDown, faNewspaper, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function ContextAwareToggle({ children, eventKey, callback, name, description }) {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <li className={`list-group-item ${styles.noOutline} text-left`}>
      <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`} onClick={decoratedOnClick}>
        <div className={styles.assignmentHeader}>
          <FontAwesomeIcon icon={faAngleDown}/>
          <div className={styles.aHeader}>
            <div>{name}</div>
            <div>{description}</div>
          </div>
        </div>
      </Button>
    </li>
  );
}
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);

  // State to track the expanded sections
  const [expandedSections, setExpandedSections] = useState({});

  // Function to toggle the expansion of a section
  const toggleSection = (index) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      {modules.map((module, index) => (
            <Accordion defaultActiveKey="0" className={styles.header}>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="0" name={module.name} description={module.description}></ContextAwareToggle>
              </Card.Header>
        
              <Accordion.Collapse eventKey="0">
                <Card.Body className={styles.container}>
                  {modules.map((module, index) => (
                    <Card.Body className={styles.assignmentItem}>
                    <ListGroup.Item key={module._id} className={styles.outlinedListItem}>
                      <FontAwesomeIcon icon={faNewspaper} className={styles.assignmentIcon}/>
        
                      <div className={styles.assignmentName}>
                        <Link
                            to={`/Kanbas/Courses/${courseId}/Assignments/${module._id}`}
                            className={"list-group-item"}
                          >
                            Subsection
                        </Link>
                      </div>
                      {/* <FontAwesomeIcon icon={faCircleCheck} className={styles.check}/> */}
                      
                    </ListGroup.Item>
                    </Card.Body>
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      ))}
    </div>
  );

  //   <div>
  //     {modules.map((module, index) => (
  //       <li key={index} className={styles.listGroupItem}>
  //         <h3 onClick={() => toggleSection(index)}>
  //           <FontAwesomeIcon
  //             icon={faAngleDown}
  //             className={
  //               expandedSections[index]
  //                 ? styles.arrowDownExpanded
  //                 : styles.arrowDown
  //             }
  //           />
  //           <h1>{module.name}</h1>
  //           <p>{module.description}</p>
  //         </h3>
  //         {expandedSections[index] && (
  //           <ul className={styles.sublist}>
  //             {/* Subsections go here */}
  //             <li className={styles.sublistItem}>Subsection 1</li>
  //             <li className={styles.sublistItem}>Subsection 2</li>
  //             {/* Add more subsections as needed */}
  //           </ul>
  //         )}
  //       </li>
  //     ))}
  //   </div>
  // );
}

export default ModuleList;
