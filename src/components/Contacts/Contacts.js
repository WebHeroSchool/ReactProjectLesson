import React from 'react';
import styles from './Contacts.module.css';
import gmail from '../../img/gmail.png';
import facebook from '../../img/facebook.png';
import github from '../../img/github.png';
import insta from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';

class Contacts extends React.Component {
  state = {
    email: 'Lalukins23@gmail.com',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100001459737784',
    instagram: 'https://www.instagram.com/lalukins/?hl=ru',
    linkedId: 'https://www.linkedin.com/in/viktorija-jen%C4%8Da-141104201/',
    gitHub: 'https://github.com/Lalukins'
  }
  render() {
    const {email, facebookUrl, instagram, linkedId,gitHub}= this.state;
    return(
        <div className={styles.wrap}>
          <h1 className={styles.title}>Contacts:</h1>
          <div>
            <h3 className={styles.subtitle}>Email</h3>
            <p>
              <img src={gmail} alt="gmail icon" className={styles.icon} />
              <span className={styles.email}>{email}</span>
            </p>
          </div>
          <div>
            <h3 className={styles.subtitle}>Social-media</h3>
            <p>
              <a href={gitHub}><img src={github} alt="github icon" className={styles.icon} /></a>
              <a href={instagram}><img src={insta} alt="instagram icon" className={styles.icon} /></a>
              <a href={facebookUrl}><img src={facebook} alt="facebook icon" className={styles.icon} /></a>
              <a href={linkedId}><img src={linkedin} alt="linkedin icon" className={styles.icon} /></a>
            </p>
          </div>
        </div>  
      )
  }
}

export default Contacts; 