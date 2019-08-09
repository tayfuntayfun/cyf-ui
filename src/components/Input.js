import React from "react";
import "./Input.css";
const Input = props => (
  <input
    onChange={props.onChange}
    className={props.className}
    style={props.style}
  />
);
export default Input;
