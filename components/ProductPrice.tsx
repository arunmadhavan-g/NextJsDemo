import React from "react";
import styled from "styled-components";
import Text from "./common/Text";

const MRP = styled.div`
  margin-left: 10px;
`;

export interface ProductPriceProps {
  price: {
    mrp: number;
    sellingPrice: number;
  };
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);

export const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
}: ProductPriceProps) => (
  <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
    <Text form="large" type="primary">
      {formatPrice(price.sellingPrice)}
    </Text>
    {price.mrp !== price.sellingPrice && (
      <MRP>
        <Text form="normal" type="secondary" decoration="line-through">
          {formatPrice(price.mrp)}
        </Text>
      </MRP>
    )}
  </div>
);
