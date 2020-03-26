import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import { object } from "prop-types";
const burger = props => {
  let transformedIngredients = Object.keys(props.ing)
    .map(ig => {
      return [...Array(props.ing[ig])].map((_, i) => {
        return <BurgerIngredient key={ig + i} making={ig} />;
      });
    })
    .reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient making="bread-top" />
      {transformedIngredients}
      <BurgerIngredient making="bread-bottom" />
    </div>
  );
};
export default burger;
