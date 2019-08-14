import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "../components/Input";
import "./inputStories.css";

storiesOf("Input", module)
  .add("inactive input", () => (
    <Input onClick={action("onChange")} className="inpt inactive-input" />
  ))
  .add("focused input", () => (
    <Input onChange={action("change")} className="inpt focused-input" />
  ))
  .add("active input", () => (
    <Input onChange={action("change")} className="inpt active-input" />
  ))
  .add("error input", () => (
    <Input onChange={action("change")} className="inpt error-input" />
  ));
