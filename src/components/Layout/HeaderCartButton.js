import React, { useContext } from "react";
import Cartcontext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import css_classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onShowCart }) => {
  const cart_ctx = useContext(Cartcontext);
console.log(cart_ctx);
  // const numberOfCartItem = cart_ctx.items.reduce((cutNumber, item) => {
  //   return cutNumber + item.amount;
  // }, 0);

  const numberOfCartItem=cart_ctx.items.length
  console.log(numberOfCartItem);
  return (
    <>
      <button className={css_classes.button} onClick={onShowCart}>
        <span className={css_classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={css_classes.badge}>{numberOfCartItem}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
