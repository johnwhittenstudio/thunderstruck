import React from 'react';
import classes from './Shop.module.css'

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className={classes.merchCard}>
      <img className={classes.small} src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p style={{fontSize: "0.9rem", color: "lightgrey"}}>{product.description}</p>
      <div>${product.price}.00</div>
      <div>
        <center>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
        </center>
      </div>
      <hr className={classes.hr}/>
    </div>
  );
}