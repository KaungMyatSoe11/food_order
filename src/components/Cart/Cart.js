import React, { useContext } from "react";
import Cartcontext from "../../store/cart-context";
import Modal from "../UI/Modal";
import css_class from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ onHideCart }) => {
  const cart_ctx = useContext(Cartcontext);

  const hasItem = cart_ctx.items.length > 0;
  const totalAmount = cart_ctx.totalAmount.toFixed(2);

  const cartItemAddHandler = () => {};

  const cartItemRemoveHandler = () => {};
  console.log(cart_ctx);
  const cartItems = (
    <ul className={css_class.cart_items}>
      {cart_ctx.items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={css_class.total}>
        <span>Total</span>
        <span>${totalAmount}</span>
      </div>
      <div className={css_class.actions}>
        <button className={css_class["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItem && <button className={css_class.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
