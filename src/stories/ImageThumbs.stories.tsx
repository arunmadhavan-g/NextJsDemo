import * as React from "react";
import {storiesOf} from "@storybook/react";
import ImageThumbs from "../../components/common/ImageThumbs";

storiesOf("ImageThumbs", module).addWithJSX(
    "Image Thumbnails to show vertical images thumbnails",
    () => {
        return (
            <ImageThumbs
                image="https://images.freeimages.com/images/small-previews/eee/summer-nature-3-1370238.jpg"
                images={["https://images.freeimages.com/images/small-previews/eee/summer-nature-3-1370238.jpg",
                    "https://images.freeimages.com/images/small-previews/9fc/yet-another-flower-1399208.jpg"]}
                setImage={() => {
                }}/>
        );
    }
);
