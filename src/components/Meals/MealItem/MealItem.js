import React, { useContext } from "react";
import Cartcontext from "../../../store/cart-context";
import css_classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  const cart_ctx = useContext(Cartcontext);
  const addToCartHandler = (amount) => {
    cart_ctx.addItem({
      id: meal.id,
      name: meal.name,
      amount: parseInt(amount),
      price: meal.price,
    });

    console.log({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };
  console.log(cart_ctx);
  return (
    <>
      <li className={css_classes.meal}>
        <div>
          <h3>{meal.name}</h3>
          <div className={css_classes.description}>{meal.description} </div>
          <div className={css_classes.price}> ${meal.price.toFixed(2)} </div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </>
  );
};

export default MealItem;
