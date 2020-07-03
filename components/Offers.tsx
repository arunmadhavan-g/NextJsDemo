import React from "react";
import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";
import * as Icon from "react-bootstrap-icons";

const Text = styled.div`
  width: 500px;
  overflow: hidden;
  textoverflow: ellipsis;
  whitespace: nowrap;
  margin: 0 5px;
  font-size: 14px;
  line-height: 18px;
`;
const Heading = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  padding: 0.5rem 0;
`;
export interface OffersProps {
  offers: string[];
}

export const Offers: React.FC<OffersProps> = ({ offers }: OffersProps) => {
  if (offers && offers.length > 0)
    return (
      <div style={{ marginTop: "20px" }}>
        <Heading>Offers Available</Heading>
        {offers.map((offer: string) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon.Tag />
            <Text>{offer}</Text>
            <FaInfoCircle />
          </div>
        ))}
      </div>
    );

  return <></>;
};
