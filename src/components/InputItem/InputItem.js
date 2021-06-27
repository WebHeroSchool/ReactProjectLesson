import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

   class InputItem extends React.Component {
    state = {
      inputValue : '',
      error: false,
      labelText: 'Add what to do'
    };

    onButtonClick = () => {
      this.setState ({
        inputValue: '',
        labelText: 'Add what to do'
      });

      if(this.state.inputValue === ''){
        this.setState({error : true, labelText: 'Cant be empty!' });
      } else if (this.props.items.every(item => item.value !== this.state.inputValue)){
        this.setState({error:false, labelText: 'Add what to do'});
        this.props.onClickAdd(this.state.inputValue);
      }else {
        this.setState ({error: true, labelText: 'This task already exist in list !'});
      }
    };

    render(){

      return (<div>
          <TextField 
            className={styles.input}
            id="standard-basic" 
            label={this.state.labelText}
            error={this.state.error}
            fullWidth
            value={this.state.inputValue}
            onChange={event => this.setState({inputValue: event.target.value})}
           />
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.onButtonClick}
          >
            Add new
        </Button>
      </div>);
    }
  }
 
  export default InputItem;