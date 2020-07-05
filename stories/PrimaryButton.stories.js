import React from "react";
import { action } from "@storybook/addon-actions";
import { PrimaryButton } from "../components/common/Button";

export default {
  title: "Primary Button",
  component: PrimaryButton,
};

export const Text = () => (
  <PrimaryButton onclick={action("clicked")}>Buy Now</PrimaryButton>
);
