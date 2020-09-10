import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './App.css';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: '',
      number: 1,
    }
  }
  onMinusClick = () => {
    this.setState(prevState => ({
       number: prevState.number - 1
    }))
  }
  
  onPlusClick = () => {
    this.setState(prevState => ({
        number: prevState.number + 1
    }))
  }

  onChange = (event) => {
    let productChange = event.target.value;
    this.setState({ 
        product: productChange,
    })
  }

  onAdd = () => { 
    this.setState(prevState => ({
      products: [ ...prevState.products, {
          product: prevState.product,
         number: prevState.number
     }],
      product: '',
      number: 1 
   }))
  }
  render() {
    return (
      <div className="App">
        <div className="AppBlock">
          <Input
            type='text'
            value={this.state.product}
            onChange={ this.onChange }
            placeholder='Наименование'   
            >
          </Input>
          <Button
            className='MinusButton'
            variant="contained"
            color="secondary"
            onClick={ this.onMinusClick }

            >
              -
          </Button>
          <Input
            className='NumberInput'
            type='text'
            value={this.state.number}
            placeholder='1'
            >
          </Input>
          <Button
            className='PlusButton'
            variant="contained"
            color="secondary"
            onClick={ this.onPlusClick }
            >
              +
          </Button>
        </div>
        <div className='TextBlock'>
          Введите наименование продукта и количество
        </div>
        <Button
          className='AddButton'
          variant="contained"
          color="primary"
          onClick={ this.onAdd }
          >
            Добавить
        </Button>
        <br></br>
        { this.state.products.map(item => (<List product={item.product} number={item.number} />)) }      </div>
    );
  }
}

export default App;