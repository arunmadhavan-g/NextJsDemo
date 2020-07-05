import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  border: 2px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dfdfdf;
`;

export interface UserProps {
  userName: string;
}

const getShortForm = (name: string) =>
  name
    .split(" ")
    .map((x) => x.substr(0, 1).toUpperCase())
    .join("");

export const Avatar: React.FC<UserProps> = ({ userName }: UserProps) => (
  <Container>
    <Circle>{getShortForm(userName)}</Circle>
  </Container>
);
