import { create } from "@storybook/theming";

export default create({
  base: "light",
  colorPrimary: "#ed4343",
  colorSecondary: "deepskyblue",
  // UI
  appBg: "white",
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
  barBg: "#ed4343",
  // Form colors
  inputBg: "white",
  inputBorder: "black",
  inputTextColor: "black",
  inputBorderRadius: 4,
  brandTitle: "Code Your Future Storybook",
  brandUrl: "https://codeyourfuture.io/",
  brandImage:
    "https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png",
});
