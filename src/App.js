import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Lists from './Lists';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {checkBox:'', product: 'Наименование', number: 1,}
      ]
    }
  }
  onMinusClick = () => {
    this.setState(prevState => ({
      ...prevState,
      products: {
        ...prevState.products,
        0: {
          ...prevState.products[0],
          number: prevState.products[0].number - 1
        }
      }
    }))
  }
  
  onPlusClick = () => {
    this.setState(prevState => ({
      ...prevState,
      products: {
        ...prevState.products,
        0: {
          ...prevState.products[0],
          number: prevState.products[0].number + 1
        }
      }
    }))
  }

  onChange = (event) => {
    let productChange = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      products: {
        ...prevState.products,
        0: {
          ...prevState.products[0],
          product: productChange,
        }
      }
    }))
  }

  onAdd = (productItem, numberItem) => {
    let newProduct = {
      number: numberItem,
      product: productItem,

    } 
    this.setState({
      products: this.state.products.push(newProduct)
    })
  }
  render() {
    return (
      <div className="App">
        <input
          type='text'
          value={this.state.products[0].product}
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
          value={this.state.products[0].number}
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
          onClick={ () => this.onAdd(this.state.products[0].product, this.state.products[0].number) }
          >
            Добавить
        </Button>
        <br></br>
        <Lists products={this.state.products}/>
      </div>
    );
  }
}

export default App;