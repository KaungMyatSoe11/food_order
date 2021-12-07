import React from "react";
import mealImg from "../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import css_classes from "./Headers.module.css";

const Headers = ({ onShowCart }) => {
  return (
    <>
      <header className={css_classes.header}>
        <h1>BMPS Food Project Application</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={css_classes.main_image}>
        <img src={mealImg} alt="Food " />
      </div>
    </>
  );
};

export default Headers;
