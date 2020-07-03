import React, { useEffect, useState } from "react";
import Grid from "styled-components-grid";
import ImageThumbs from "./common/ImageThumbs";
import MainImage from "./common/MainImage";

export interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({
  images,
}: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);
  return (
    <Grid>
      <Grid.Unit size={1 / 6}>
        <ImageThumbs images={images} setImage={setCurrentImage} />
      </Grid.Unit>
      <Grid.Unit size={5 / 6}>
        <MainImage image={currentImage} />
      </Grid.Unit>
    </Grid>
  );
};

export default ProductImages;
