import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";
import Text from "./Text";

export interface BreadcrumbsProps {
  hierarchy: string[];
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  hierarchy,
}: BreadcrumbsProps) => {
  return (
    <Container>
      {hierarchy.map((data, i) => (
        <>
          <Text type="secondary" form="small">
            {data}
          </Text>
          {i != hierarchy.length - 1 && <FaAngleRight size={20} color="grey" />}
        </>
      ))}
    </Container>
  );
};

export default Breadcrumbs;
