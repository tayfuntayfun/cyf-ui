import { create } from "@storybook/theming";
export default create({
  base: "light",
  colorPrimary: "#219653",
  colorSecondary: "deepskyblue",
  // UI
  appBg: "#219653",
  appContentBg: "white",
  appBorderColor: "white",
  appBorderRadius: 4,
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  // Text colors
  textColor: "rgb(255, 250, 250)",
  textInverseColor: "yellow",
  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "rgb(246, 153, 190)",
  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,
  brandTitle: "Pink Panther Storybook",
  brandUrl: "https://example.com",
  brandImage:
    "https://application-process.staging.codeyourfuture.io/static/media/logo-cyf.fbcea877.png"
});
