import styles from "./Home.module.css";
import { Button } from "react-bootstrap";

function Status() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.statusColumn}>
        <ul className={`list-group ${styles.noOutline}`}>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
              Import Existing Content
            </Button>
          </li>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
              Importing From Commons
            </Button>
          </li>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
              Choose Home Page
            </Button>
          </li>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
              View Course Stream
            </Button>
          </li>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
              New Announcement
            </Button>
          </li>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
              New Analytics
            </Button>
          </li>
          <li className={`list-group-item ${styles.noOutline} text-left`}>
            <Button variant="light" block className={`btn-block ${styles.fullWidthButton} ${styles.lightGreyBackground}`}>
              View Course Notifications
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Status;
