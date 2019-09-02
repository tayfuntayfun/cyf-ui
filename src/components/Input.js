import React from "react";
import styled from "styled-components";
//The button styled component

//Here starts our specific input styles:

/* Inactive input styling */
const inactiveInput = {
  name: "inactiveInput",
  border: "1px solid #e8e8e8"
};

//Focused Input styling
const focusedInput = {
  name: "focusedInput",
  border: "1px solid #bdbdbd"
};
//The input  styled component
const Input = styled.input`
  box-sizing: border-box;
  background: #fafafa;
  border: ${props => props.variant.border};
`;

//Add all input types here
const inputTypes = [inactiveInput, focusedInput];

//Return the wanted input styles according the type props that send to the component
const getSelectedInputStyle = variant =>
  inputTypes.find(inpt => inpt.name === variant);

export default props => (
  <Input variant={getSelectedInputStyle(props.variant)} />
);
