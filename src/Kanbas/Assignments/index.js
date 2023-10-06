import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import styles from "./Assignment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faNewspaper, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function ContextAwareToggle({ children, eventKey, callback }) {
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
          <div className={styles.aHeader}>Assignments for course {courseId}</div>
        </div>
      </Button>
    </li>
  );
}

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  // State to track the expanded sections for each assignment
  const [expandedSections, setExpandedSections] = useState({});

  // Function to toggle the expansion of a section
  const toggleSection = (index) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Accordion defaultActiveKey="0" className={styles.header}>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0"></ContextAwareToggle>
        </Card.Header>

        <Accordion.Collapse eventKey="0">
          <Card.Body className={styles.container}>
            {courseAssignments.map((assignment, index) => (
              <Card.Body className={styles.assignmentItem}>
              <ListGroup.Item key={assignment._id} className={styles.outlinedListItem}>
                <FontAwesomeIcon icon={faNewspaper} className={styles.assignmentIcon}/>

                <div className={styles.assignmentName}>
                  <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className={"list-group-item"}
                    >
                      {assignment.title}
                  </Link>
                </div>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.check}/>
                
              </ListGroup.Item>
              </Card.Body>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Assignments;
