import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

  class InputItem extends React.Component {
    state = {
      inputValue : ''
    };

    onButtonClick = () => {
      this.setState ({
        inputValue: ''
      });

      this.props.onCliсkAdd(this.state.inputValue.toUpperCase());
    };

    render(){
      const isError = this.props.error;
      let textField;

        if (isError) {
          textField = <TextField
            error
            id="standard-error-helper-text"
            fullWidth
            label="Error"
            defaultValue=" "
            helperText="Cant be empty!"
            value={this.state.inputValue}
            onChange={event => this.setState({ inputValue: event.target.value })}
          />
        } else {
          textField = <TextField 
            className={styles.input}
            id="standard-basic" 
            label="Add what to do" 
            fullWidth
            value={this.state.inputValue}
            onChange={event => this.setState({inputValue: event.target.value})}
           />
        }

      return (<div>
        <div> {textField} </div>
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