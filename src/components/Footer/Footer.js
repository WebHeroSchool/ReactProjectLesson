import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

  const Footer = ({ count }) => (<footer><div className={styles.count}> {count} - Things left to do.</div>
    <div>
      <Button>ALL</Button>
      <Button color="primary">Active</Button>
      <Button color="primary">Completed</Button>
      <Button color="secondary">Clear Completed</Button>
    </div>
    </footer>
  )
  export default Footer;