import React from "react"
import Grid from 'styled-components-grid';
import ProductImages from "../components/ProductImages";

const images: string[] = ["images/vivo-front.png", "images/vivo-right.png", "images/vivo-back.png", "images/vivo-left.png"]

export interface ProductDetailsProps {
}


const ProductDetails: React.FC<ProductDetailsProps> = () =>
    <Grid>
        <Grid.Unit size={6 / 12}><ProductImages images={images}/></Grid.Unit>
        <Grid.Unit size={6 / 12}>Product Details Area</Grid.Unit>
    </Grid>

export default ProductDetails
