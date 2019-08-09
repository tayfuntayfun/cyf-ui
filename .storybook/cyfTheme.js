import { create } from "@storybook/theming";
export default create({
  base: "light",
  colorPrimary: "#B0BEA9",
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
  textColor: "black", 
  textInverseColor: "black",
  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "#92AA83",
  // Form colors
  inputBg: "white",
  inputBorder: "black",
  inputTextColor: "black",
  inputBorderRadius: 4,
  brandTitle: "Code Your Future Storybook",
  brandUrl: "https://example.com",
  brandImage:
    "https://application-process.staging.codeyourfuture.io/static/media/logo-cyf.fbcea877.png"
});
