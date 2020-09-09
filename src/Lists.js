import React from 'react';
import './List.css';


class Lists extends React.Component {

 

  render(props) {
    return (
      <div className="List">
        {this.props.product} | {this.props.number}
      </div>
    );
  }
}

export default Lists;
