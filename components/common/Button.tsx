import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 36px;
  min-width: 84px;
  border-radius: 18px;
  padding: 0 23px;
  background-color: #3899ec;
  border-color: #3899ec;
  color: #fff;
  text-decoration: none;
  user-select: none;
`;

export interface PrimaryButtonprops {
  size: string[];
  text: string[];
  prefixIcon?: React.ReactNode;
  onclick?: (e: any) => void;
}

export const PrimaryButton: React.FC<PrimaryButtonprops> = ({
  size,
  text,
  prefixIcon,
  onclick,
}) => {
  return (
    <Button onClick={onclick}>
      {prefixIcon}
      {text}
    </Button>
  );
};
