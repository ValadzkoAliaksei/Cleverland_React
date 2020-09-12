import React from 'react';
import './List.css';
import { FormControlLabel, Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     checked: false,
    }
  }

  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
  };

  onDelete = () => {
    this.props.onDelete(this.props.products.id)
  };

  render(props) {
      return (
        <div className="List">
          <FormControlLabel
            className = "ProductLabel"
            control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              name="checked" />}
            label = {`${this.props.products.product} ${(this.props.products.number !== 1) ? ("| " + this.props.products.number) : ""}`}
          />
          <IconButton aria-label="delete" onClick={this.onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      );
    }
  }


export default List;