import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

  const Footer = ({id, onClickDeleteDone, onClickFilter, activeTask, doneTask}) => (<footer>
    <div className={styles.count} 
         onClick={() => onClickFilter('active')}>
          {activeTask} - Things left to do.
    </div>
    <div className={styles.buttons}>
      <Button onClick={() => onClickFilter('allTask')}>
        ALL {activeTask + doneTask}
      </Button>
      <Button color="primary" onClick={() => onClickFilter('active')}>
        Active {activeTask}
      </Button>
      <Button color="primary" onClick={() => onClickFilter('done')}>
        Completed {doneTask}
      </Button>
      <Button color="secondary" onClick={() => onClickDeleteDone(id)}>
        Clear Completed
      </Button>
    </div>
    </footer>
  )

  export default Footer;