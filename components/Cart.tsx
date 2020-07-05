import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import styled from "styled-components";
import {CounterBubble} from "./common/CounterBubble";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export interface CartProps {
    cartItems: number
}

export const Cart: React.FC<CartProps> = ({cartItems}: CartProps) => (
    <Container>
        <FaShoppingCart size={30}/>
        <CounterBubble count={cartItems}/>
    </Container>
);
