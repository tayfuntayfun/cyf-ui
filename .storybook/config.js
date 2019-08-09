import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import cyfTheme from "./cyfTheme";
addParameters({
  options: {
    theme: cyfTheme
  }
});
function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
