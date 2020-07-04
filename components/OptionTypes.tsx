import React from "react";
import styled from "styled-components";
import {Options, OptionType} from "../models/Models";
import Text from "./common/Text";
import Thumbnails from "./common/Thumbnails";

const Layout = styled.div`
  display: flex;
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
                                           }: OptionTypeProps) =>

    <Container>
        <Text form="normal" type="primary">{type}</Text>
        <Layout>
            {options.map((option) =>
                <Thumbnails size={30} selected={selectedVal == option}
                            onClick={() => changeOptions(type, option, currentOptions)}>
                    {option}
                </Thumbnails>
            )}
        </Layout>
    </Container>


const getSelectedValue = (currentOptions: Options[], option: OptionType): string => {
    const selectedOption = currentOptions.find((x) => x.type === option.type);
    return selectedOption ? selectedOption.value : option.options[0];
}

export const OptionTypes: React.FC<OptionTypesProps> = ({
                                                            options,
                                                            currentOptions,
                                                            changeOptions,
                                                        }: OptionTypesProps) =>
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

