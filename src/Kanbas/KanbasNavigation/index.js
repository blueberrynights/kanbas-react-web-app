import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faTachometerAlt, faBook, faCalendarAlt, faEnvelope, faHistory,
    faPaintBrush, faGlobe, faQuestionCircle, faN
} from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  
  const icons = [
    <FontAwesomeIcon icon={faUser} />,
    <FontAwesomeIcon icon={faTachometerAlt} />,
    <FontAwesomeIcon icon={faBook} />,
    <FontAwesomeIcon icon={faCalendarAlt} />,
    <FontAwesomeIcon icon={faEnvelope} />,
    <FontAwesomeIcon icon={faHistory} />,
    <FontAwesomeIcon icon={faPaintBrush} />,
    <FontAwesomeIcon icon={faGlobe} />,
    <FontAwesomeIcon icon={faQuestionCircle} />
  ];

  const { pathname } = useLocation();

  return (
    <div className="icons-container">
      <div className="list-group">
        <FontAwesomeIcon icon={faN} size="2xl" className="n-icon"/>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) ? "active" : ""}`}>
            <div className="icon-and-text">
              {icons[index]}
              <span className="link-text">{link}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default KanbasNavigation;