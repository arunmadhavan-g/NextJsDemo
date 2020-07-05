import * as React from "react";
import { storiesOf } from "@storybook/react";
import * as Icon from "react-bootstrap-icons";
import { action } from "@storybook/addon-actions";
import Button from "../../components/common/Button";

storiesOf("Button", module)
  .add("Primary", () => {
    return (
      <Button
        onClick={action("button clicked")}
        size="large"
        prefixIcon={<Icon.Cart2 />}
        type="primary"
      >
        Add To Cart
      </Button>
    );
  })
  .add("danger", () => {
    return (
      <Button
        onClick={action("button clicked")}
        size="large"
        prefixIcon={<Icon.SkipForward />}
        type="danger"
      >
        Buy Now
      </Button>
    );
  })
  .add("secondary", () => {
    return (
      <Button
        onClick={action("button clicked")}
        size="large"
        prefixIcon={<Icon.SkipForward />}
        type="secondary"
      >
        Buy Now
      </Button>
    );
  });
