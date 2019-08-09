import React from "react";
import "./Button.css";
const Button = props => (
  <button onClick={props.onClick} className={props.className} style={props.style}>
    {props.label && <span>{props.label}</span>}
  </button>
);
export default Button;
