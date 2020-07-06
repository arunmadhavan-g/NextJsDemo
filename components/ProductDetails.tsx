import React from "react";
import Grid from "styled-components-grid";
import ProductImages from "../components/ProductImages";
import {ButtonsContainer} from "./ButtonsContainer";
import ProductContents from "./ProductContents";
import {OptionTypes} from "./OptionTypes";
import {Delivery} from "./Delivery";
import {Synopsis} from "./Synopsis";
import {DetailedDescription} from "./DetailedDescription";
import {Specification} from "./Specification";
import {addToCart, changeOptionType} from "../store/actions";
import {Options, ProductDetailsRootState, VariantDetailsRootState} from "../models/Models";
import styled from "@emotion/styled";


const Container = styled.div`
    margin-top: 50px;
`

export interface ProductDetailsProps {
    productDetails: ProductDetailsRootState
    variantDetails: VariantDetailsRootState
    dispatch: Function
}

const getDeliveryStatus = (zipCode: string): boolean => zipCode === "600004";

const ProductDetails: React.FC<ProductDetailsProps> = ({productDetails, variantDetails, dispatch}) => {
    return (
        <Container>
            <Grid>
                <Grid.Unit size={1 / 12}/>
                <Grid.Unit size={5 / 12}>
                    <ProductImages images={variantDetails.images}/>
                    <ButtonsContainer addToCart={() => dispatch(addToCart())}/>
                </Grid.Unit>
                <Grid.Unit size={5 / 12}>
                    <ProductContents
                        variantDetails={variantDetails}
                        productDetails={productDetails}
                    />
                    <OptionTypes
                        options={productDetails.optionTypes}
                        currentOptions={variantDetails.currentOptions}
                        changeOptions={(
                            type: string,
                            value: string,
                            currentOptions: Options[]
                        ) => changeOptionType(type, value, currentOptions, dispatch)}
                    />
                    <Delivery status={false} getStatus={getDeliveryStatus}/>
                    <Synopsis content={productDetails.synopsis}/>
                </Grid.Unit>
                <Grid.Unit size={1 / 12}/>
            </Grid>
            <Grid>
                <Grid.Unit size={1 / 12}/>
                <Grid.Unit size={10 / 12}>
                    <DetailedDescription features={productDetails.features}/>
                </Grid.Unit>
                <Grid.Unit size={1 / 12}/>
            </Grid>
            <Grid>
                <Grid.Unit size={1 / 12}/>
                <Grid.Unit size={10 / 12}>
                    <Specification specs={productDetails.specs}/>
                </Grid.Unit>
                <Grid.Unit size={1 / 12}/>
            </Grid>
        </Container>
    );
};

export default ProductDetails;
