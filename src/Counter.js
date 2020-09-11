import React from 'react';
import { TextField, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Counter.css';

class Counter extends React.Component {

  onPlusClick = () => {
    this.props.onPlusClick()
  }


  onMinusClick = () => {
    this.props.onMinusClick()
  }

  render(props) {
    return (
      <div className="Counter">
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={this.onMinusClick}
          >
          <RemoveIcon /> 
        </Fab>
        <TextField
          id="standard-helperText"
          defaultValue="1"
          variant="outlined"
          value={this.props.number}
        />
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={this.onPlusClick}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default Counter;