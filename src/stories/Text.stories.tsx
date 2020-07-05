import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../../components/common/Text";

storiesOf("Text", module)
  .addWithJSX("primary", () => {
    return (
      <Text form="normal" type="primary">
        Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)
      </Text>
    );
  })
  .addWithJSX("Secondary", () => {
    return (
      <Text form="normal" type="secondary">
        Vivo Z1x (Fusion Blue, 64 GB) (6 GB RAM)
      </Text>
    );
  })

  .addWithJSX("paragraph", () => {
    return (
      <Text form="normal" type="paragraph">
        The Vivo Z1x is powered by Vivo's proprietary FlashCharge technology.
        This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile's
        battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3
        hour talk time with a 5-minute charge.
      </Text>
    );
  })
  .addWithJSX("Line Through Text", () => {
    return (
      <Text form="normal" type="secondary" decoration="line-through">
        This is the secondary text type with line-through.
      </Text>
    );
  })
  .addWithJSX("Small Text", () => {
    return (
      <Text form="small" type="primary">
        This is the small text.
      </Text>
    );
  })
  .addWithJSX("H1 Text", () => {
    return (
      <Text form="h1" type="primary">
        This is the h1 text.
      </Text>
    );
  })
  .addWithJSX("H2 Text", () => {
    return (
      <Text form="h2" type="primary">
        This is the h2 text.
      </Text>
    );
  })
  .addWithJSX("H3 Text", () => {
    return (
      <Text form="h3" type="primary">
        This is the h3 text.
      </Text>
    );
  })
  .addWithJSX("H4 Text", () => {
    return (
      <Text form="h4" type="primary">
        This is the h4 text.
      </Text>
    );
  })
  .addWithJSX("Large Text", () => {
    return (
      <Text form="large" type="primary">
        This is the large text.
      </Text>
    );
  })
  .addWithJSX("Normal Text", () => {
    return (
      <Text form="normal" type="primary">
        This is the normal text.
      </Text>
    );
  })
  .addWithJSX("Paragraph Text", () => {
    return (
      <Text form="paragraph" type="primary">
        The Vivo Z1x is powered by Vivo's proprietary FlashCharge technology.
        This Vivo exclusive 22.5 W FlashCharge lets you top up the mobile's
        battery charge in a jiffy. With a Type-C charger, the Vivo Z1x gets a 3
        hour talk time with a 5-minute charge.
      </Text>
    );
  });
