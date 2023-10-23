import ModuleList from "./ModuleList";
import styles from "./Modules.module.css"
import { Button, Dropdown} from 'react-bootstrap';


function Modules() {
  return (
    <div>
      {/* <div className={styles.modulesHeader}>Modules</div> */}
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

            <Button variant="danger">Add Module</Button>{' '}
          </div>
        </div>
      <ModuleList />
    </div>
    
  );
  
}
export default Modules;