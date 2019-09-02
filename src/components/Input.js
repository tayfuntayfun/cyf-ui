import React from "react";
import styled from "styled-components";
//The button styled component

//Here starts our specific input styles:

/* Inactive input styling */
const InactiveInput = {
  name: "InactiveInput",
  border: "1px solid #e8e8e8"
};

//The input  styled component
const Input = styled.input`
  box-sizing: border-box;
  color: ${props => props.variant.color};
  background: ${props => props.variant.background || "#fafafa"};
`;

//Add all input types here
const inputTypes = [InactiveInput];

//Return the wanted input styles according the type props that send to the component
const getSelectedInputStyle = variant =>
  inputTypes.find(inpt => inpt.name === variant);

export default props => (
  <Input variant={getSelectedInputStyle(props.variant)} />
);
