import React from "react";
import Grid from "styled-components-grid";
import {ProductDetailsModel, VariantDetails} from "../models/Models";
import {ProductPrice} from "../components/ProductPrice";
import {Offers} from "../components/Offers";
import Breadcrumbs from "./common/Breadcrumbs";
import Text from "./common/Text";
import Ratings from "./common/Ratings";


export interface ProductContentsProps {
    productDetails: ProductDetailsModel;
    variantDetails: VariantDetails;
}

const ProductContents: React.FC<ProductContentsProps> = ({productDetails, variantDetails}: ProductContentsProps) =>
    <>
        <Grid.Unit size={12}>
            <Breadcrumbs hierarchy={productDetails.hierarchy}/>
        </Grid.Unit>
        <Grid.Unit size={12}>
            <Text form="h2" type="primary">{variantDetails.title}</Text>
        </Grid.Unit>
        <Grid.Unit size={12}>
            <Ratings rating={variantDetails.rating}/>
        </Grid.Unit>
        <Grid.Unit size={12}>
            <ProductPrice price={variantDetails.price}/>
        </Grid.Unit>
        <Grid.Unit size={12}>
            <Offers offers={productDetails.offers}/>
        </Grid.Unit>
    </>

export default ProductContents;
