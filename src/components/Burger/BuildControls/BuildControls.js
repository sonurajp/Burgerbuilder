import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "../BuildControl/BuildControl";
const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <div>
      Current price : <strong>Rs {props.price}</strong>
    </div>
    {controls.map(cntrl => (
      <BuildControl
        key={cntrl.label}
        IngridientName={cntrl.label}
        added={() => props.ingridientAdded(cntrl.type)}
        remove={() => props.ingridientRemoved(cntrl.type)}
        disable={props.disabled[cntrl.type]}
      />
    ))}

    <button
      disabled={props.od}
      className={classes.OrderButton}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
