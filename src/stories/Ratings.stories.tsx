import * as React from "react";
import { storiesOf } from "@storybook/react";
import Ratings from "../../components/common/Ratings";

storiesOf("Ratings", module).addWithJSX("Ratings", () => {
  return <Ratings rating={4} />;
});
