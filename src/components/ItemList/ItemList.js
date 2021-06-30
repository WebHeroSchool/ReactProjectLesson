import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item'
import styles from './ItemList.module.css';
import List from '@material-ui/core/List';


const ItemList = ({ items, onClickDone, onClickDelete}) =>(<List className={styles.list}>
    {items.map(item => <div key={item.id}>
      <Item 
      className={styles.item} 
      value={item.value} 
      isDone={item.isDone} 
      onClickDone={onClickDone} 
      onClickDelete={onClickDelete}
      id={item.id}
      />
      </div>)}
  </List>);

    ItemList.propTypes = {
      items: PropTypes.array.isRequired,
      onClickDone: PropTypes.func.isRequired,
      onClickDelete: PropTypes.func.isRequired
  };

export default ItemList;