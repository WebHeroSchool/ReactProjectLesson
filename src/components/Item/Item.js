import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

  class Item extends React.Component {

    render() {
      const {value, isDone, onClickDone, id, onCliсkDelete} = this.props;

      return(
        <div>
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
                <IconButton onClick ={() => onCliсkDelete(id)}>
                  <ClearIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        </div>);
    }
  }

  Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onCliсkDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  };

  export default Item;