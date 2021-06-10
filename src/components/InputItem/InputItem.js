import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';

  const InputItem = () => (<div className={styles.input}>
      <TextField id="standard-basic" label="Add what to do" />
    </div>);

  export default InputItem;