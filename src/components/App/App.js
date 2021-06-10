import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css'

  const todoItem = 'Write new aplication';
  const App = () => {
    const items = [
      {
        value: 'Write new aplication'
      },
      {
        value: 'Write props'
      },
      {
        value: 'Do all works'
      }
    ];

    return (
    <div className="wrap">
      <h1 className="wrap__title">Important things or TODOS:</h1>
      <InputItem />
      <ItemList items = {items} />
      <Footer count = {3} />
    </div>);
}

export default App;