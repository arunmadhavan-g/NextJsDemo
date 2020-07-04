import React from "react";
import * as Icon from "react-bootstrap-icons";
import Button from "./common/Button";
import styled from "@emotion/styled";

export interface ButtonsContainerProps {
    addToCart: () => void;
}

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly ;
    padding: 35px 50px
`

export const ButtonsContainer: React.FC<ButtonsContainerProps> = ({addToCart}: ButtonsContainerProps) => (
    <Container id="hey">
        <Button size="large" prefixIcon={<Icon.Cart2/>} onClick={addToCart} type="primary">
            Add To Cart
        </Button>
        <Button size="large" prefixIcon={<Icon.SkipForward/>} type="danger">
            Buy Now
        </Button>
    </Container>
);
