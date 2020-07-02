import React from "react"
import Grid from 'styled-components-grid';
import ImageThumbs from "../components/ImageThumbs";
import MainImage from "../components/MainImage";

export interface ProductImagesProps {
    images: string[]
}

const ProductImages: React.FC<ProductImagesProps> = ({images}:ProductImagesProps) =>
    <Grid>
        <Grid.Unit size={1 / 6}><ImageThumbs images={images}/></Grid.Unit>
        <Grid.Unit size={5 / 6}><MainImage image={images[0]}/></Grid.Unit>
    </Grid>


export default ProductImages;
