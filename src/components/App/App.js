import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import ToDo from '../ToDo/ToDo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';
import school from '../../img/School.png';

  const App = () => 
  (<Router>
    <div className={styles.wrap}>
    <Card>
      <div className={styles.menu}>
      <Link to='/' className={styles.position}><div className={styles.link}>About me</div></Link>
      <Link to='/todo' className={styles.position}><div className={styles.link}>TODO</div></Link>
      <Link to='/contacts' className={styles.position}> <div className={styles.link}>Contacts</div></Link>
      <div className={styles.position}><a href="https://webheroschool.ru/"><img src={school} alt="school img" className={styles.school_img} /></a></div>
      </div>
    </Card>
    <Card>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={ToDo} />
      <Route path='/contacts' component={Contacts} />
    </Card>
  </div>
  </Router>);

export default App;