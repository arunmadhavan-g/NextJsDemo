import React from "react";
import styled from "styled-components";
import Grid from "styled-components-grid";

const Heading = styled.div``;
const Specs = styled.div``;

export interface SpecificationProps {
  specs: { type: string; value: string }[];
}

export const Specification: React.FC<SpecificationProps> = ({
  specs,
}: SpecificationProps) => (
  <>
    <Heading> Specification</Heading>
    <div style={{ margin: "10px" }}>
      <Specs>
        {specs.map((item) => (
          <Grid>
            <Grid.Unit size={6 / 12}>{item.type}</Grid.Unit>
            <Grid.Unit size={6 / 12}>{item.value}</Grid.Unit>
          </Grid>
        ))}
      </Specs>
    </div>
  </>
);
