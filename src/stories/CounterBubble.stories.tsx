import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CounterBubble } from "../../components/common/CounterBubble";

storiesOf("CounterBubble", module).addWithJSX("CounterBubble", () => {
  return <CounterBubble count={10} />;
});
