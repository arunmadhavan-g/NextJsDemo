import React from "react";
import Text from "./common/Text";
import styled from "styled-components";


export interface SynopsisProps {
    content: string;
}

const Container = styled.div`
    margin: 10px 0
`

const ContentContainer = styled.div`
    margin-top: 10px;
`;

export const Synopsis: React.FC<SynopsisProps> = ({content}: SynopsisProps) => (
    <Container>

        <Text form="normal" type="primary">Description</Text>
        <ContentContainer>
            <Text form="paragraph" type="paragraph">{content}</Text>
        </ContentContainer>
    </Container>
);
