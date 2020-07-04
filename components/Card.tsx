import React from "react";
import styled from "styled-components";
import Text from "./common/Text";
import MainImage from "./common/MainImage";

export interface CardProps {
  title: string;
  paragraph: string;
  imgSrc: string;
  inverted: boolean;
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

const Card: React.FC<CardProps> = ({ title, paragraph, inverted, imgSrc }: CardProps) => (
  <Container>
      {inverted && <MainImage image={imgSrc}/>}
    <Text form="normal" type="primary">{title}</Text>
    <Text form="paragraph" type="paragraph">{paragraph}</Text>
          {!inverted && <MainImage image={imgSrc}/>}
  </Container>
);

export default Card;
