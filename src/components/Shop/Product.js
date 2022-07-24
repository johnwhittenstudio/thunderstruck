import React from 'react';
import classes from './Shop.module.css'

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className={classes.merchCard}>
      <img className={classes.small} src={product.image} alt={product.name} />
      <h3 style={{fontSize: "1rem", color: "rgb(0, 31, 97)"}}>{product.name}</h3>
      <p style={{fontSize: "0.9rem", color: "rgb(0, 31, 97)"}}>{product.description}</p>
      <div style={{fontSize: "1rem", color: "rgb(0, 31, 97)"}}>${product.price}.00</div>
      <br></br>
      <div>
        <center>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
        </center>
      </div>
      <hr className={classes.hr}/>
    </div>
  );
}