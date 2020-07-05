import * as React from "react";
import { storiesOf } from "@storybook/react";
import Ratings from "../../components/common/Ratings";

storiesOf("Ratings", module).add("Ratings", () => {
  return <Ratings rating={4} />;
});
