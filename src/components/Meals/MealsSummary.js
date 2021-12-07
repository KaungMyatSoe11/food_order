import React from "react";
import css_classes from "./MealSummary.module.css";

const MealsSummary = () => {
  return (
    <>
      <section className={css_classes.summary}>
        <h2>Delcious Food, Devlivered To You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum
          tenetur eveniet excepturi quas magnam! Minima, sapiente sint. Error,
          earum incidunt! Nesciunt, officiis rem exercitationem quo magnam id
          dolores nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          numquam, accusamus rerum officiis consequatur vero commodi,
          exercitationem rem sunt repudiandae, alias ratione voluptates deleniti
          sed ab molestiae aliquam quidem atque!
        </p>
      </section>
    </>
  );
};

export default MealsSummary;
