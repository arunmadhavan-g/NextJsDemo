import React from "react";
import styled from "styled-components";

export interface CardProps {
  title: string;
  paragraph: string;
}

const Container = styled.div`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
const Heading = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;
const Card: React.FC<CardProps> = ({ title, paragraph }: CardProps) => (
  <Container>
    <Heading>{title}</Heading>
    <Paragraph>{paragraph}</Paragraph>
  </Container>
);

export default Card;
