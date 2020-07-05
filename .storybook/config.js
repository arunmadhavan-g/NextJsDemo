import { configure, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);
// automatically import all files ending in *.stories.tsx
configure(require.context("../src/stories", true, /\.stories\.tsx?$/), module);
