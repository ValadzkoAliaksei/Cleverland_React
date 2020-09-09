import React from 'react';
import './List.css';


class Lists extends React.Component {

 

  render(props) {
    for (let key in this.props.products) {
      return (
        <div className="List">
          {this.props.products[key].product} | {this.props.products[key].number}
        </div>
      );
    }
  }
}
export default Lists;
