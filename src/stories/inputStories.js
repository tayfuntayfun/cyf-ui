import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../components/Input";

storiesOf("Input", module)
  .add("inactive input", () => (
    <Input
      onClick={action("onChange")}
      style={{
        boxSizing: "border-box",
        border: "1px solid #E8E8E8",
        background: "#FAFAFA"
      }}
    />
  ))
  .add("focused input", () => (
    <Input
      onChange={action("change")}
      style={{
        boxSizing: "border-box",
        border: " 1px solid #BDBDBD",
        background: "#FAFAFA"
      }}
    />
  ))
  .add("active input", () => (
    <Input
      onChange={action("change")}
      style={{
        boxSizing: "border-box",
        border: "2px solid #03A9F4",
        background: "#FAFAFA"
      }}
    />
  ))
  .add("error input", () => (
    <Input
      onChange={action("change")}
      style={{
        boxSizing: "border-box",
        border: "1px solid #F44336",
        background: "#FAFAFA"
      }}
    />
  ));
