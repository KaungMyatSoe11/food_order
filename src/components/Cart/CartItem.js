import React from "react";
import css_classes from "./CartItem.module.css";

const CartItem = ({ item, onRemove, onAdd }) => {
  return (
    <li className={css_classes.cart_item}>
      <div>
        <h2>{item.name}</h2>
        <div className={css_classes.summary}>
          <span className={css_classes.price}>${item.price.toFixed(2)}</span>
          <span className={css_classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={css_classes.action}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
