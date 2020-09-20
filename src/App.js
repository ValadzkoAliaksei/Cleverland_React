import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

const App = () => {
  const [number, setNumber] = useState(1);
  const [product, setProduct] = useState('');
  const [id, setId] = useState(0);
  const [products, setProducts] = useState([]);

  const onChange = (event) => {
    const productChange = event.target.value;
    setProduct (productChange);
  };

  const onPlusClick = () => {
    setNumber(number + 1);
  };

  const onMinusClick = () => {
    (number > 1) &&
    setNumber(number - 1);
  };

  const onAdd = () => {
    document.getElementById('standard-helperText').nextElementSibling.style ='none';
    const newObject = {
      product: product,
      number: number,
      id: id,
    };
    if (product)  {
      setProducts(prevArray => [...prevArray, newObject]);
      setProduct('');
      setNumber(1);
      setId(id + 1);
    } else {
      alert("Введите наименования продукта!");
      document.getElementById('standard-helperText').nextElementSibling.style.borderColor ='red';
    };
  };

  const onDelete = (id) => {
    let productsChange = products.filter(item => item.id !== id);
    setProducts(productsChange);
  };

  return (
    <div className="App">
      <div className="FormBlock">
        <Form product={product} number={number} onAdd={onAdd} onPlusClick={onPlusClick} onMinusClick={onMinusClick} onChange={onChange} />
      </div>
      <div className="ListBlock">
        {products.map(item => (<List products={item} onDelete={onDelete} />))}
      </div>
    </div>
  );
};

export default App;