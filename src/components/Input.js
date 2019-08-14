import React from "react";
const Input = props => (
  <input
    onChange={props.onChange}
    className={props.className}
    style={props.style}
  />
);
export default Input;
