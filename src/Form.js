import React from 'react';
import { TextField, Button} from '@material-ui/core';
import './Form.css';
import Counter from './Counter';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      number: 1,
      id: 0,
    }
  }

  onPlusClick = () => {
    this.setState(prevState => ({
       number: prevState.number + 1
    }))
  }

  onMinusClick = () => {
    (this.state.number > 1) &&
    this.setState(prevState => ({
       number: prevState.number - 1
    }))
  }

  onChange = (event) => {
    let productChange = event.target.value;
    this.setState({ 
        product: productChange,
    })
  }
  
  onAdd = () => {
    this.props.onAdd(this.state.product, this.state.number, this.state.id)
    this.setState(prevState => ({
      product: '',
      number: 1,
      id: prevState.id + 1,
    }))
  }

  render() {
    return (
      <div className="Form">
        <div className="FormBlock">
          <TextField
            id="standard-helperText"
            placeholder='Наименование'
            helperText="Введите наименование продукта и количество"
            variant="outlined"
            onChange={this.onChange}
            value={this.state.product}
          />
          <Counter number={this.state.number}  onMinusClick={this.onMinusClick} onPlusClick={this.onPlusClick}/>
        </div>
        <Button
          className='AddButton'
          variant="contained"
          color="primary"
          onClick={ this.onAdd }
          >
            Добавить
        </Button>
      </div>
    );
  }
}

export default Form;