import * as React from "react";
import { storiesOf } from "@storybook/react";
import * as Icon from "react-bootstrap-icons";
import { Badge } from "../../components/common/Badge";

storiesOf("Badges", module)
  .add("success", () => {
    return (
      <Badge skin="success" size="medium" prefixIcon={<Icon.Check />}>
        Available
      </Badge>
    );
  })
  .add("danger", () => {
    return (
      <Badge skin="danger" size="medium" prefixIcon={<Icon.XCircle />}>
        UnAvailable
      </Badge>
    );
  });
