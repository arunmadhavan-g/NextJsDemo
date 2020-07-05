import * as React from "react";
import { storiesOf } from "@storybook/react";
import MainImage from "../../components/common/MainImage";

storiesOf("MainImage", module).add("MainImage", () => {
  return (
    <MainImage image="https://static.toiimg.com/thumb/msid-70806196,width-220,resizemode-4,imgv-6/Vivo-Z1x.jpg" />
  );
});
