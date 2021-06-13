import React from 'react';
import Item from '../Item/Item'
import styles from './ItemList.module.css';
import List from '@material-ui/core/List';

const ItemList = ({ items, onClickDone, onClikDelete}) =>(<List className={styles.list}>
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
  </List>);

export default ItemList;