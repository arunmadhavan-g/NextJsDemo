import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Avatar } from "../../components/common/Avatar";

storiesOf("Avatar", module).addWithJSX("Avatar", () => {
  return <Avatar userName="Arun Madhavan" />;
});
