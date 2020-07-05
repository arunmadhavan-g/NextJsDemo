import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PrimaryButton } from "../components/common/Button";

storiesOf("Button", module).add("with text", () => {
  return (
    <PrimaryButton onClick={action("button clicked")}>
      Hello World
    </PrimaryButton>
  );
});
