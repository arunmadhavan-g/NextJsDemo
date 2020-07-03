import React from "react";
import styled from "styled-components";
import Grid from "styled-components-grid";
import {FaAngleRight, FaStar} from "react-icons/fa";
import {ProductDetailsModel, VariantDetails} from "../models/Models";
import {ProductPrice} from "../components/ProductPrice";
import {Offers} from "../components/Offers";
import _ from 'lodash';

const BreadCrumbContainer = styled.div`
  display: flex;
`;
const Text = styled.div`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  svg {
    padding-left: 1rem;
  }
`;
const Heading = styled.div`
  font-weight: inherit;
  font-size: 20px;
  line-height: 24px;
  color: #162d3d;
`;

const RatingContainer = styled.div`
  color: rgb(255, 215, 0);
  display: flex;
  padding: 0.25rem 0;
`;

const Rating = ({rating}: { rating: number }) => {
    return <RatingContainer>{_.times(rating, () => <FaStar/>)}
        <RatingText>{`${rating} Ratings`}</RatingText></RatingContainer>

}

const RatingText = styled.div`
  color: #32536a;
  margin-left: 0.5rem;
`;

export interface ProductContentsProps {
    productDetails: ProductDetailsModel;
    variantDetails: VariantDetails;
}

const ProductContents: React.FC<ProductContentsProps> = ({
                                                             productDetails,
                                                             variantDetails,
                                                         }) => {
    return (
        <>
            <Grid.Unit size={12}>
                <BreadCrumbContainer>
                    {productDetails.hierarchy.map((data, i) => (
                        <Text>
                            {data}
                            {i != productDetails.hierarchy.length - 1 && (
                                <FaAngleRight size={20}/>
                            )}
                        </Text>
                    ))}
                </BreadCrumbContainer>
            </Grid.Unit>
            <Grid.Unit size={12}>
                <Heading>{variantDetails.title}</Heading>
            </Grid.Unit>
            <Grid.Unit size={12}>
                <Rating rating={variantDetails.rating}/>
            </Grid.Unit>
            <Grid.Unit size={12}>
                <ProductPrice price={variantDetails.price}/>
            </Grid.Unit>
            <Grid.Unit size={12}>
                <Offers offers={productDetails.offers}/>
            </Grid.Unit>
        </>
    );
};

export default ProductContents;
