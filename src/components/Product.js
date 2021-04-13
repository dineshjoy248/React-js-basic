import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="ver">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3> 
      <div>RS.{product.price}</div>
      <h5>{product.desc}</h5>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}