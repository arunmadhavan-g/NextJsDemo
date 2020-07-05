import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../../components/common/Text";

storiesOf("Text", module)
  .add("Secondary", () => {
    return (
      <Text form="normal" type="secondary">
        15,999
      </Text>
    );
  })
  .add("primary", () => {
    return (
      <Text form="normal" type="secondary">
        Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)
      </Text>
    );
  })
  .add("paragraph", () => {
    return (
      <Text form="normal" type="paragraph">
        The Vivo Z1x is powered by Vivo's proprietary FlashCharge technology.
        This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile's
        battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3
        hour talk time with a 5-minute charge.
      </Text>
    );
  })
  .add("Line Through Text", () => {
    return (
      <Text form="normal" type="secondary" decoration="line-through">
        Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)
      </Text>
    );
  });
