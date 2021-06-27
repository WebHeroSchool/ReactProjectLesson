import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {Octokit} from '@octokit/rest';
import game from '../../img/joystick.png';
import bali from '../../img/palm-tree.png';

const octokit = new Octokit();

class About extends React.Component {
  state ={
    isLoading: true,
    repoList: [],
    infoAboutUser: [],
    isError: false,
    errorMessage: ' ',
    firstPage: 0,
    nextPage: 1,
    gameUlr: 'https://lalukins.github.io/JavaScriptGame/',
    baliUlr: 'https://lalukins.github.io/FinalProjectHTML/#',
    gitHub: 'https://github.com/Lalukins'
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

    onClickNextPage = () => {
      this.setState({
        firstPage: this.state.firstPage + 1,
        nextPage: this.state.nextPage + 1
      })
    };

     onClickBackPage = () => {
      this.setState({
        firstPage: this.state.firstPage - 1,
        nextPage: this.state.nextPage - 1
      })
    }
  render() {
    const {isLoading, repoList, isError, errorMessage, infoAboutUser, firstPage, nextPage,gameUlr,baliUlr,gitHub} = this.state;
    return(
      <div className={styles.wrap}>
        { isLoading ? <CircularProgress color="secondary" /> :
          <div>
            <h1 className={styles.title}> About Me:</h1>
              {isError ? 'Cant get any information from the server! Error!:' + errorMessage :
                <div>
                  <a href={gitHub}><img src={infoAboutUser.avatar_url} alt='Accauntimg' className={styles.avatar} /></a>
                  <p className={styles.name}> User Nikname - {infoAboutUser.login}</p>
                  <p className={styles.name}>{infoAboutUser.bio}</p>
                  <h3 className={styles.title}> My School projects :</h3>
                  <ul className={styles.project_list}>
                  <a href={gameUlr}><li className={styles.project_listItem}><img src={game} alt="game icon" className={styles.icon} /> Game find a bug</li></a>
                  <a href={baliUlr}><li className={styles.project_listItem}><img src={bali} alt="bali icon" className={styles.icon} /> HTML Bali site</li></a>
                  </ul>
                  <h3 className={styles.title}>My reprositories:</h3>
                  <ul className ={styles.list_wrap}>
                    {repoList.slice(firstPage, nextPage).map(repo =>(
                      <li key={repo.id} className={styles.list}>
                        <a href={repo.svn_url} className={styles.repo_name}>{repo.name}</a>
                        <div className={styles.repos__info}>
                        <p className={styles.repos__item_style}>Language: { repo.language }</p>
                        <p className={styles.repos__item_style}>Updated: {repo.updated_at.split("T")[0].split("-").reverse().join(".")}</p>  
                        </div>
                    </li>))}
                  </ul>
                  <div className={styles.button}>
                      <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button disabled={firstPage === 0} onClick = {() => this.onClickBackPage()}>Previous</Button>
                        <Button disabled={repoList.length - nextPage < 0} onClick = {() => this.onClickNextPage()}>Next</Button>
                      </ButtonGroup>
                  </div>
                </div>
              }
          </div>
        }
      </div>
    );
  }
} 

export default About; 