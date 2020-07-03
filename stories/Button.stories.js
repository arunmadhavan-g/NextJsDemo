import React from "react";
import { action } from "@storybook/addon-actions";
import { PrimaryButton } from "../components/common/Button";

export default {
  title: "Button",
  component: PrimaryButton,
};

export const Text = () => (
  <PrimaryButton size="large" onclick={action("clicked")} text="Buy Now" />
);
