import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
  state ={
    isLoading: true,
    repoList: [],
    infoAboutUser: [],
    isError: false,
    errorMessage: ' '
  }
  componentDidMount() {
      octokit.repos.listForUser({
        username: 'Lalukins'
      }).then(({data}) => {
          this.setState({
              repoList: data,
              isLoading: false
          });
      })

        .catch(err => {
          this.setState({ 
            isLoading: false,
            isError: true,
            errorMessage: err
          });
        })
        octokit.users.getByUsername({
          username: 'Lalukins'
        }).then(({data}) => {
            this.setState({ 
              infoAboutUser: data,
              isLoading: false,
            })
          })
          .catch(err => {
            this.setState({ 
              isLoading: false,
              isError: true,
              errorMessage: err
            });
      })
  };

  render() {
    const {isLoading, repoList, isError, errorMessage, infoAboutUser} = this.state;
    return(
      <div className={styles.wrap}>
        { isLoading ? <CircularProgress color="secondary" /> :
          <div>
            <h1 className={styles.title}> About Me:</h1>
              {isError ? 'Cant get any info from the server! Error!:' + errorMessage :
                <div>
                  <b className={styles.name}> User Nikname - {infoAboutUser.login}</b>
                  <img src={infoAboutUser.avatar_url} alt='Accauntimg' className={styles.avatar} />
                  <h3 className={styles.title}>My reprositories:</h3>
                  <ol>
                    {repoList.map(repo =>(
                      <li key={repo.id} className={styles.list}>
                        <a href={repo.svn_url} className={styles.repo_name}>{repo.name}</a>
                    </li>))}
                  </ol>
                </div>
              }
          </div>
        }
      </div>
    );
  }
} 

export default About; 