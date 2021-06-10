import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

  const todoItem = 'Write new aplication';
  const App = () => {
    const items = [
      {
        value: 'Write new aplication',
        isDone: true
      },
      {
        value: 'Write props',
        isDone: false
      },
      {
        value: 'Do all works',
        isDone: true
      }
    ];

    return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Important things or TODOS:</h1>
      <InputItem />
      <ItemList items = {items} />
      <Footer count = {3} />
    </div>);
}

export default App;