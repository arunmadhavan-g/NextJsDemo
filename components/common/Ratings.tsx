import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import Text from "./Text";
import _ from "lodash";

export interface RatingsProps {
  rating: number;
}

const RatingContainer = styled.div`
  color: rgb(255, 215, 0);
  display: flex;
  padding: 5px 0;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-top: 2px;
  margin-left: 10px;
`;

const Ratings: React.FC<RatingsProps> = ({ rating }: RatingsProps) => (
  <RatingContainer>
    {_.times(rating, () => (
      <FaStar />
    ))}
    {_.times(5 - rating, () => (
      <FaStar color="#dfdfdf" />
    ))}
    <TextContainer>
      <Text form="h4" type="secondary">{`${rating} Ratings`}</Text>
    </TextContainer>
  </RatingContainer>
);

export default Ratings;
