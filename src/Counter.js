import React from 'react';
import { TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Counter.css';

const Counter = (props) => {
  return (
    <div className="Counter">
      <Fab
        className="CounterButton"
        size="medium"
        color="secondary"
        aria-label="remove"
        onClick={props.onMinusClick}
      >
        <RemoveIcon />
      </Fab>
      <TextField
        className="CounterInput"
        id="standard-helperText"
        defaultValue="1"
        variant="outlined"
        value={props.number}
      />
      <Fab
        className="CounterButton"
        size="medium"
        color="secondary"
        aria-label="add"
        onClick={props.onPlusClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Counter;