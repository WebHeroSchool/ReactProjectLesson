import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item'
import styles from './ItemList.module.css';
import List from '@material-ui/core/List';


const ItemList = ({ items, onClickDone, onCliсkDelete}) =>(<List className={styles.list}>
    {items.map(item => <div key={item.id}>
      <Item 
      className={styles.item} 
      value={item.value} 
      isDone={item.isDone} 
      onClickDone={onClickDone} 
      onCliсkDelete={onCliсkDelete}
      id={item.id}
      />
      </div>)}
  </List>);

    ItemList.propTypes = {
      items: PropTypes.array.isRequired,
      onClickDone: PropTypes.func.isRequired,
      onCliсkDelete: PropTypes.func.isRequired
  };

export default ItemList;