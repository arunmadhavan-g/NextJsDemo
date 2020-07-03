import React from "react";
import styled from "styled-components";

const Heading = styled.div``;
const Image = styled.div``;
const MarketingLayout = styled.div``;

export interface DetailedDescriptionProps {
  features: { title: string; description: string; image: string }[];
}

export const DetailedDescription: React.FC<DetailedDescriptionProps> = ({
  features,
}: DetailedDescriptionProps) => {
  return (
    <>
      <Heading>Product Features</Heading>
      <div style={{ border: "1px solid #dfdfdf", marginTop: "10px" }}>
        {features.map((feature) => (
          <div>
            {feature.title}
            <div>{feature.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};
