import React from "react";
import styled from "styled-components";
//The button styled component

//Here starts our specific input styles:

const inactiveInput = {
  name: "inactiveInput",
  border: "1px solid #e8e8e8"
};

const focusedInput = {
  name: "focusedInput",
  border: "1px solid #bdbdbd"
};

const activeInput = {
  name: "activeInput",
  border: "2px solid #03a9f4"
};
const errorInput = {
  name: "errorInput",
  border: "1px solid #f44336"
};
//The input styled component
const Input = styled.input`
  box-sizing: border-box;
  background: #fafafa;
  border: ${props => props.variant.border};
`;

//Add all input types here
const inputTypes = [inactiveInput, focusedInput, activeInput, errorInput];

//Return the wanted input styles according the type props that send to the component
const getSelectedInputStyle = variant =>
  inputTypes.find(inpt => inpt.name === variant);

export default props => (
  <Input variant={getSelectedInputStyle(props.variant)} />
);
