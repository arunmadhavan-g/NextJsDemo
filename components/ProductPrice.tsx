import React from "react";
import styled from "styled-components";
const Heading = styled.div`
  font-size: 28px;
`;
const MRP = styled.div`
  font-size: 18px;
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
    <Heading>{formatPrice(price.sellingPrice)}</Heading>
    {price.mrp !== price.sellingPrice && (
      <MRP
        style={{
          textDecoration: "line-through",
          marginLeft: "10px",
        }}
      >
        {formatPrice(price.mrp)}
      </MRP>
    )}
  </div>
);
