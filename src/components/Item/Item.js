import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

  const Item = ({value, isDone, onClickDone, id, onClikDelete}) => (<div>
    <ListItem dense button>
        <ListItemIcon onClick = {() => onClickDone(id)}>
          <Checkbox 
          inputProps={{'aria-label': 'uncontrolled-checkbox'}} 
          />
          <label className ={ 
              classnames({
                [styles.item]: true,
                [styles.done]: isDone
              })
          }>
            {value}
          </label>
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton>
            <ClearIcon onClick ={() => onClikDelete(id)}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  </div>);

  export default Item;