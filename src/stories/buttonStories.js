import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "./buttonStories.css";
import Button from "../components/Button";

storiesOf("Button", module)
  // primary Button
  .add("primary", () => (
    <Button
      onClick={action("click")}
      label="Button"
      className="btn btn-primary"
    />
  ))
  .add("primary outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-primary-outline"
    />
  ))
  .add("primary-light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      className="btn btn-primary-light"
    />
  ))
  .add("primary with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-primary-gray-shadow"
    />
  ))
  .add("primary with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-primary-shadow"
    />
  ))
  // secondary Button
  .add("secondary", () => (
    <Button
      onClick={action("click")}
      label="Button"
      className="btn btn-secondary"
    />
  ))
  .add("secondary outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-secondary-outline"
    />
  ))
  .add("secondary-light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      className="btn btn-secondary-light"
    />
  ))
  .add("secondary with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-secondary-gray-shadow"
    />
  ))
  .add("secondary with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-secondary-shadow"
    />
  ))
  // error Button
  .add("error", () => (
    <Button
      onClick={action("click")}
      label="Button"
      className="btn btn-error"
    />
  ))
  .add("error outline", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-error-outline"
    />
  ))
  .add("error-light", () => (
    <Button
      onClick={action("click")}
      label="Button"
      className="btn btn-error-light"
    />
  ))
  .add("error with gray shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-error-gray-shadow"
    />
  ))
  .add("error with shadow", () => (
    <Button
      label="Button"
      onClick={action("click")}
      className="btn btn-error-shadow"
    />
  ))
  //////
  .add("with outline", () => (
    <Button
      label="Outline Button"
      onClick={action("click")}
      style={{ background: "transparent", border: "3px solid #fecd43" }}
    />
  ))
  .add("with rounder corners", () => (
    <Button
      label="Rounded Button"
      onClick={action("click")}
      style={{ borderRadius: "15px" }}
    />
  ))
  .add("disabled", () => (
    <Button
      disabled
      label="Disabled Button"
      onClick={action("click")}
      style={{ background: "gray", border: "gray", cursor: "not-allowed" }}
    />
  ));
