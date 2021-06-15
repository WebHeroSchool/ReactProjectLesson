import React from 'react';
import PropTypes from 'prop-types';
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

    InputItem.propTypes = {
      inputValue: PropTypes.string.isRequired,
      onCliсkAdd: PropTypes.func.isRequired,
      isError: PropTypes.bool.isRequired,
      textField: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      onButtonClick: PropTypes.func.isRequired

    };

  export default InputItem;