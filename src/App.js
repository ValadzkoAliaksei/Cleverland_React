import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      newProduct: {checkBox: false, product: 'Наименование', number: 1,}
    } 
    this.lists = this.state.products.map(
        prod => <List checked={prod.checkBox} product={prod.product} number={prod.number}/>
      )
    
  }
  onMinusClick = () => {
    this.setState(prevState => ({
      ...prevState,
      newProduct: {
        ...prevState.newProduct,
        number: prevState.newProduct.number - 1
      }
    }))
  }
  
  onPlusClick = () => {
    this.setState(prevState => ({
      ...prevState,
      newProduct: {
        ...prevState.newProduct,
        number: prevState.newProduct.number + 1
      }
    }))
  }

  onChange = (event) => {
    let productChange = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      newProduct: {
        ...prevState.newProduct,
        product: productChange,
      }
    }))
  }

  onAdd = () => { 
    this.setState({
      products: [ ...this.state.products, this.state.newProduct
    ]})
  }
  render() {
    return (
      <div className="App">
        <input
          type='text'
          value={this.state.newProduct.product}
          onChange={ this.onChange }   
          >
        </input>
        <Button
          variant="contained"
          color="secondary"
          onClick={ this.onMinusClick }

          >
            -
        </Button>
        <input
          type='text'
          value={this.state.newProduct.number}
          >
        </input>
        <Button
          variant="contained"
          color="secondary"
          onClick={ this.onPlusClick }
          >
            +
        </Button>
        <div>
          Введите наименование продукта и количество
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={ this.onAdd }
          >
            Добавить
        </Button>
        <br></br>
        {this.lists}
      </div>
    );
  }
}

export default App;