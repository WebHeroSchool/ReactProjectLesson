import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


  const InputItem = () => (<div>
      <TextField 
      className={styles.input}
      id="standard-basic" 
      label="Add what to do" 
      fullWidth
      />
      <Button 
        className={styles.button}
        variant="contained" 
        color="primary">
        Add new
      </Button>
    </div>);

  export default InputItem;