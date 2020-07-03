import React from "react";
import styled, { css } from "styled-components";
import {Options, OptionType} from "../models/Models";

const Heading = styled.div``;
const Layout = styled.div`
  display: flex;
`;
const Thumbnail = styled.div`
  cursor: pointer;
  margin-right: 10px;
  padding: 15px;
  box-shadow: 0 0 0 1px rgba(43, 129, 203, 0.24) inset;
  border-radius: 6px;
  content: " ";
  ${(props) =>
    props.selected &&
    css`
      box-shadow: 0 0 0 2px #3899ec inset;
    `};
`;

export interface OptionTypeProps {
  type: string;
  options: string[];
  selectedVal: string;
  currentOptions: Options[];
  changeOptions: (
    type: string,
    value: string,
    currentOptions: Options[]
  ) => void;
}

export interface OptionTypesProps {
  options: OptionType[];
  currentOptions: Options[];
  changeOptions: (
    type: string,
    value: string,
    currentOptions: Options[]
  ) => void;
}

const Option: React.FC<OptionTypeProps> = ({
  type,
  options,
  selectedVal,
  currentOptions,
  changeOptions,
}: OptionTypeProps) => {
  console.log(options);
  return (
    <div style={{ margin: "10px 0" }}>
      <Heading>{type}</Heading>
      <Layout>
        {options.map((option) => (
          <Thumbnail
            selected={selectedVal === option}
            onClick={() => changeOptions(type, option, currentOptions)}
          >
            {option}
          </Thumbnail>
        ))}
      </Layout>
    </div>
  );
};

export const OptionTypes: React.FC<OptionTypesProps> = ({
  options,
  currentOptions,
  changeOptions,
}: OptionTypesProps) => (
  <div>
    {options.map((option) => (
      <Option
        {...option}
        changeOptions={changeOptions}
        currentOptions={currentOptions}
        selectedVal={currentOptions.find((x) => x.type === option.type)?.value}
      />
    ))}
  </div>
);
