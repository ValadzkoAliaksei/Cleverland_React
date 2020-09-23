import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './Form.css';
import Counter from './Counter';

const Form = (props) => {
  return (
    <div className="Form">
      <div className="FormBlock">
        <TextField
          id="standard-helperText"
          placeholder='Наименование'
          helperText="Введите наименование продукта и количество"
          variant="outlined"
          onChange={props.onChange}
          value={props.product}
        />
        <Counter number={props.number} onPlusClick={props.onPlusClick} onMinusClick={props.onMinusClick}/>
      </div>
      <Button
        className='AddButton'
        variant="contained"
        color="primary"
        onClick={props.onAdd}
      >
        Добавить
        </Button>
    </div>
  );
};

export default Form;