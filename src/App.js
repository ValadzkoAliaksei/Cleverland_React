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

  onAdd = (item, number, id) => { 
    this.setState(prevState => ({
      products: [ ...prevState.products, {
        product: item,
        number: number,
        id: id,
     }],
   }))
  }

  onDelete = (id) => {
    let productsChange = this.state.products.filter(item => item.id !== id);
    this.setState ({
      products: productsChange,
    })
  }


  render() {
    return (
      <div className="App">
        <div className= "FormBlock">
          <Form  onAdd={this.onAdd}/>
        </div>
        <div className= "ListBlock">
          { this.state.products.map(item => (<List products={item} onDelete={this.onDelete}/>)) }
        </div>
      </div>
    );
  }
}

export default App;