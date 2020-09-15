import React from 'react';
import { TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Counter.css';

class Counter extends React.Component {

  render(props) {
    return (
      <div className="Counter">
        <Fab
          className="CounterButton"
          size="medium"
          color="secondary"
          aria-label="remove"
          onClick={this.props.onMinusClick}
          >
          <RemoveIcon /> 
        </Fab>
        <TextField
          className="CounterInput"
          id="standard-helperText"
          defaultValue="1"
          variant="outlined"
          value={this.props.number}
        />
        <Fab
          className="CounterButton"
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={ this.props.onPlusClick}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default Counter;