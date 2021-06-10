import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

  const todoItem = 'Write new aplication';
  const App = () => (
    <div>
    <h1>Important things or TODOS:</h1>
      <InputItem />
      <ItemList todoItem = {todoItem} />
      <Footer />
    </div>);

export default App;