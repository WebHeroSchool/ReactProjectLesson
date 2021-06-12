import React from 'react';
import Item from '../Item/Item'
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const ItemList = ({ items, onClickDone}) =>(<div>
  <List>
    {items.map(item => (
      <ListItem key={item.value} className={styles.item} dense button>
        <ListItemIcon>
          <Checkbox inputProps={{'aria-label': 'uncontrolled-checkbox'}} onClick = {() => console.log(item.isDone)} />
        </ListItemIcon>
        <ListItemText><Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} /></ListItemText>
        <ListItemSecondaryAction>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
</div>);

export default ItemList;