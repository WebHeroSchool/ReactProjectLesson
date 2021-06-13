import React from 'react';
import Item from '../Item/Item'
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, id, onClikDelete}) =>(<ul className={styles.list}>
    {items.map(item => <li key={item.id}>
      <Item 
      className={styles.item} 
      value={item.value} 
      isDone={item.isDone} 
      onClickDone={onClickDone} 
      onClikDelete={onClikDelete}
      id={item.id}
      />
      </li>)}
  </ul>);

export default ItemList;