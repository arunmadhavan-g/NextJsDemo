import React from "react";
import { PrimaryButton } from "./common/Button";
import * as Icon from "react-bootstrap-icons";

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
    <PrimaryButton
      size="large"
      text="Add To Cart"
      prefixIcon={<Icon.Cart2 />}
      onclick={addToCart}
    />
    <PrimaryButton
      text="Buy Now"
      size="large"
      prefixIcon={<Icon.SkipForward />}
      onclick={addToCart}
    />
  </div>
);
