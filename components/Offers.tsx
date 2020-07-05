import React from "react";
import styled from "styled-components";
import Text from "./common/Text";
import {InfoText} from "./common/InfoText";

export interface OffersProps {
    offers: string[];
}

const OffersContainer = styled.div`
    padding: 10px;
`
const Container = styled.div`
 margin-top: 20px;
`

export const Offers: React.FC<OffersProps> = ({offers}: OffersProps) => {
    if (offers && offers.length > 0)
        return (
            <Container>
                <Text form="normal" type="primary">Offers Available</Text>
                <OffersContainer>{offers.map((offer: string) => <InfoText text={offer}/>)}</OffersContainer>
            </Container>
        );

    return <></>;
};
