import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
const Circle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface UserProps {
  userName: string;
}

const getShortForm = (name: string) =>
  name
    .split(" ")
    .map((x) => x.substr(0, 1).toUpperCase())
    .join("");

export const User: React.FC<UserProps> = ({ userName }: UserProps) => (
  <Container>
    <Circle>{getShortForm(userName)}</Circle>
  </Container>
);
