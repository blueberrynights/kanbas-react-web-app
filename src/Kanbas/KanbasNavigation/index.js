import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTachometerAlt,
  faBook,
  faCalendarAlt,
  faEnvelope,
  faHistory,
  faPaintBrush,
  faGlobe,
  faQuestionCircle,
  faN,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./KanbasNavigationStyles.module.css";
import { useState } from "react";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const icons = [
    <FontAwesomeIcon icon={faUser} />,
    <FontAwesomeIcon icon={faTachometerAlt} />,
    <FontAwesomeIcon icon={faBook} />,
    <FontAwesomeIcon icon={faCalendarAlt} />,
    <FontAwesomeIcon icon={faEnvelope} />,
    <FontAwesomeIcon icon={faHistory} />,
    <FontAwesomeIcon icon={faPaintBrush} />,
    <FontAwesomeIcon icon={faGlobe} />,
    <FontAwesomeIcon icon={faQuestionCircle} />,
  ];

  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  const handleIconClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className={styles.iconsContainer}>
      <div className={styles.listGroup}>
        <FontAwesomeIcon icon={faN} size="2x" className={styles.nIcon} />
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${activeLink === index ? "active" : ""}`}
            onClick={() => handleIconClick(index)}
          >
            <div className={styles.iconAndText}>
              <div className={index === 0 ? styles.accountIcon : styles.icon}>
                {icons[index]}
              </div>
              <span
                className={styles.linkText}
                style={{
                  color: activeLink === index ? "#d41c2d" : "white", // Change text color
                }}
              >
                {link}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default KanbasNavigation;
