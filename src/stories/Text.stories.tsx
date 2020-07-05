import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../../components/common/Text";

storiesOf("Text", module)
  .add("primary", () => {
    return (
      <Text form="normal" type="primary">
        Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)
      </Text>
    );
  })
  .add("Secondary", () => {
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
        This is the secondary text type with line-through.
      </Text>
    );
  })
  .add("Small Text", () => {
    return (
      <Text form="small" type="primary">
        This is the small text.
      </Text>
    );
  })
  .add("H1 Text", () => {
    return (
      <Text form="h1" type="primary">
        This is the h1 text.
      </Text>
    );
  })
  .add("H2 Text", () => {
    return (
      <Text form="h2" type="primary">
        This is the h2 text.
      </Text>
    );
  })
  .add("H3 Text", () => {
    return (
      <Text form="h3" type="primary">
        This is the h3 text.
      </Text>
    );
  })
  .add("H4 Text", () => {
    return (
      <Text form="h4" type="primary">
        This is the h4 text.
      </Text>
    );
  })
  .add("Large Text", () => {
    return (
      <Text form="large" type="primary">
        This is the large text.
      </Text>
    );
  })
  .add("Normal Text", () => {
    return (
      <Text form="normal" type="primary">
        This is the normal text.
      </Text>
    );
  })
  .add("Paragraph Text", () => {
    return (
      <Text form="paragraph" type="primary">
        The Vivo Z1x is powered by Vivo's proprietary FlashCharge technology.
        This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile's
        battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3
        hour talk time with a 5-minute charge.
      </Text>
    );
  });
