import ModuleList from "../Modules/ModuleList";
import styles from "./Home.module.css";
import { Button, Dropdown } from "react-bootstrap";
import Status from "./Status";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContent}>
        <div>
          <div className={styles.moduleButtons}>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
            Collapse All
            </Button>
          </li>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
            View Progress
            </Button>
          </li>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Publish All
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="danger">Add Module</Button>{" "}
          </div>
        </div>
        <hr></hr>
        <ModuleList />
      </div>        
      <Status></Status>
    </div>
  );
}

export default Home;
