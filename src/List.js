import React from 'react';
import './List.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     checked: this.props.checked,
    }
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  render(props) {
      return (
        <div className="List">
          <FormControlLabel
            control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              name="checked" />}
            label={this.props.product + ` | ` + this.props.number}
          />
        </div>
      );
    }
  }


export default List;