import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

const App = () => {
  const [number, setNumber] = useState(1);
  const [product, setProduct] = useState('');
  const [id, setId] = useState(0);
  const [products, setProducts] = useState([]);

  const onChange = (event) => setProduct (event.target.value);

  const onPlusClick = () => setNumber(number + 1);

  const onMinusClick = () => (number > 1) && setNumber(number - 1);

  const onAdd = () => {
    const newObject = {
      product: product,
      number: number,
      id: id,
    };
    product && setProducts([...products, newObject]) || setProduct('') || setNumber(1) || setId(id + 1);
  };

  const onDelete = (id) => setProducts(products.filter(item => item.id !== id));

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