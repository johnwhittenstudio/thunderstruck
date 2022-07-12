import React from 'react';
import classes from './Shop.module.css'

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.11;
  const shippingPrice = itemsPrice > 100 ? 0 : itemsPrice * 0.12;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
 
  return (
    <aside className={classes.blockCol1}>
      <h2>Cart Items</h2>
      {/* <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className={classes.badge}>{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div> */}
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className={classes.row}>
            <div className={classes.blockCol2}>{item.name}</div>
            <div className={classes.blockCol2}>
              <button onClick={() => onRemove(item)} className={classes.remove}>
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className={classes.add}>
                +
              </button>
            </div>

            <div className={classes.col2TextRight}>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className={classes.row}>
              <div className={classes.blockCol2}>Items Price</div>
              <div className={classes.textRight}>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className={classes.row}>
              <div className={classes.blockCol2}>Tax Price</div>
              <div className={classes.textRight}>${taxPrice.toFixed(2)}</div>
            </div>
            <div className={classes.row}>
              <div className={classes.blockCol2}>Shipping Price</div>
              <div className={classes.textRight}>
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.blockCol2}>
                <strong>Total Price</strong>
              </div>
              <div className={classes.textRight}>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className={classes.row}>
              <button className={classes.checkout} onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}