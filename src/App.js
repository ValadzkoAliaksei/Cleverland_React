import React from 'react';
import './App.css';
import Form from './Form';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  onAdd = (item, number) => { 
    this.setState(prevState => ({
      products: [ ...prevState.products, {
        product: item,
        number: number
     }],
   }))
  }

  render() {
    return (
      <div className="App">
        <div className= "FormBlock">
          <Form  onAdd={this.onAdd}/>
        </div>
        <div className= "ListBlock">
          { this.state.products.map(item => (<List product={item.product} number={item.number} />)) }
        </div>
      </div>
    );
  }
}

export default App;