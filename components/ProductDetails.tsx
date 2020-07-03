import React from "react";
import Grid from "styled-components-grid";
import { useDispatch, useSelector } from "react-redux";
import ProductImages from "../components/ProductImages";
import { ButtonsContainer } from "./ButtonsContainer";
import ProductContents from "./ProductContents";
import { OptionTypes } from "./OptionTypes";
import { Delivery } from "./Delivery";
import { Synopsis } from "./Synopsis";
import { DetailedDescription } from "./DetailedDescription";
import { Specification } from "./Specification";
import { changeOptionType, addToCart } from "../store/actions";

const images: string[] = [
  "images/vivo-front.png",
  "images/vivo-right.png",
  "images/vivo-back.png",
  "images/vivo-left.png",
];

export interface ProductDetailsProps {}

const getDeliveryStatus = (zipCode: string): boolean => zipCode === "600004";

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const { productDetails, variantDetails } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Grid>
        <Grid.Unit size={6 / 12}>
          <ProductImages images={images} />
          <ButtonsContainer addToCart={() => dispatch(addToCart())} />
        </Grid.Unit>
        <Grid.Unit size={6 / 12}>
          <ProductContents
            variantDetails={variantDetails}
            productDetails={productDetails}
            ratings={5}
          />
          <OptionTypes
            options={productDetails.optionTypes}
            currentOptions={variantDetails.currentOptions}
            changeOptions={(
              type: string,
              value: string,
              currentOptions: { type: string; value: string }[]
            ) => dispatch(changeOptionType(type, value, currentOptions))}
          />
          <Delivery status={false} getStatus={getDeliveryStatus} />
          <Synopsis content={productDetails.synopsis} />
        </Grid.Unit>
      </Grid>
      <Grid>
        <Grid.Unit size={12}>
          <DetailedDescription features={productDetails.features} />
        </Grid.Unit>
      </Grid>
      <Grid>
        <Grid.Unit size={12}>
          <Specification specs={productDetails.specs} />
        </Grid.Unit>
      </Grid>
    </>
  );
};

export default ProductDetails;
