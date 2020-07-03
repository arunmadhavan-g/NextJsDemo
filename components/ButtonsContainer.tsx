import React from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";

const Button = styled.button``;
export interface ButtonsContainerProps {
  addToCart: () => void;
}

export const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
  addToCart,
}: ButtonsContainerProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      padding: "35px 50px",
    }}
  >
    <Button size="large" prefixIcon={<Icon.Cart2 />} onClick={addToCart}>
      Add To Cart
    </Button>
    <Button size="large" prefixIcon={<Icon.SkipForward />}>
      Buy Now
    </Button>
  </div>
);
