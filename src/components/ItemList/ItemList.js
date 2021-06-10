import React from 'react';
import Item from '../Item/Item'

  const ItemList = ({ todoItem }) => (<ul>
      <li><Item todoItem={todoItem} /></li>
      <li><Item todoItem={'Write props'} /></li>
      <li><Item todoItem={'Do all works'} /></li>
    </ul>);

  export default ItemList;