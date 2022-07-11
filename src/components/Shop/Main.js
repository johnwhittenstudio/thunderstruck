import React from 'react';
import Product from './Product';
import classes from './Shop.module.css'

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className={classes.blockCol2}>
      <h2 className={classes.merch}>original merch by thunderstruck artists</h2>
      <em><h5 className={classes.merch}>free shipping in the US an all orders over $100</h5></em>
      <div className={classes.row}>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}