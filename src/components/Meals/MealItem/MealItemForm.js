import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import css_classes from "./MealItemForm.module.css";

const MealItemForm = ({ onAddToCart }) => {
  const input_amount = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = input_amount.current.value;
    const total_amount = +amount;
    if (amount.trim().length === 0 || total_amount < 1 || total_amount > 5) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(amount);
  };

  const [amountIsValid, setAmountIsValid] = useState(false);
  return (
    <form className={css_classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={input_amount}
        input={{
          id: "number",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
