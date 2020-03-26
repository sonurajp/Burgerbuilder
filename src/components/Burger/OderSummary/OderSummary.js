import React from "react";

import Auxilary from "../../../hoc/Auxilary";

const oderSummary = props => {
  const ingridientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxilary>
      <h3>Your Oder Summary</h3>
      <p>You have added the following ingridents:</p>
      <ul>{ingridientSummary}</ul>
      <p>Continue To checkout</p>
    </Auxilary>
  );
};
export default oderSummary;
