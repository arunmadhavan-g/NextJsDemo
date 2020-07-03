import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export interface CartProps {}

export const Cart: React.FC<CartProps> = () => (
  <Container>
    <FaShoppingCart size={30} />
  </Container>
);
