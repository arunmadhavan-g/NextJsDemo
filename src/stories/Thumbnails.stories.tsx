import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Thumbnails from "../../components/common/Thumbnails";

storiesOf("Thumbnails", module).add("Thumbnails", () => {
  return (
    <Thumbnails size={60} selected={true} onClick={action("button clicked")}>
      <img
        src={
          "https://static.toiimg.com/thumb/msid-70806196,width-220,resizemode-4,imgv-6/Vivo-Z1x.jpg"
        }
      />
    </Thumbnails>
  );
});
