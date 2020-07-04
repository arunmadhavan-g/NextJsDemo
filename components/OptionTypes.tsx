import React from "react";
import styled, {css} from "styled-components";
import {Options, OptionType} from "../models/Models";
import Text from "./common/Text";

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

const Container = styled.div`
   margin: 10px 0
`
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
        <Container>
            <Text form="normal" type="primary">{type}</Text>
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
        </Container>
    );
};

const getSelectedValue = (currentOptions: Options[], option: OptionType): string => {
    const selectedOption = currentOptions.find((x) => x.type === option.type);
    return selectedOption ? selectedOption.value : option.options[0];
}

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
                selectedVal={getSelectedValue(currentOptions, option)}
            />
        ))}
    </div>
);
