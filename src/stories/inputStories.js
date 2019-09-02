import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "../components/Input";

storiesOf("Input", module)
  .add("inactive input", () => (
    <Input onClick={action("onChange")} variant="inactiveInput" />
  ))
  .add("focused input", () => (
    <Input onChange={action("change")} variant="focusedInput" />
  ));
// .add("active input", () => (
//   <Input onChange={action("change")} className="inpt active-input" />
// ))
// .add("error input", () => (
//   <Input onChange={action("change")} className="inpt error-input" />
//));
