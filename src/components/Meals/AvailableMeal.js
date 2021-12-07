import React from "react";
import { DUMMY_MEALS } from "./MealsData";
import css_classes from "./Availablemeal.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeal = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));
  return (
    <>
      <section className={css_classes.meals}>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeal;
