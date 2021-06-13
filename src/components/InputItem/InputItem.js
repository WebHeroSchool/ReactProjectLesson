import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

  class InputItem extends React.Component {
    state = {
      inputValue : null
    };
    render(){
      const { onClikAdd } = this.props;

      return (<div>
        <TextField 
          className={styles.input}
          id="standard-basic" 
          label="Add what to do" 
          fullWidth
        />
        <Button 
          variant="contained" 
          color="primary"
          onClik={onClikAdd}
          >
            Add new
        </Button>
      </div>);
    }
  }

  export default InputItem;