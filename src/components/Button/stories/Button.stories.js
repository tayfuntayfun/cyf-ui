/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "..";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => (
  <Button label="Button" onClick={action("click")} variant="btnPrimaryOutlined">
    Click Me
  </Button>
);
