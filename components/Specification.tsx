import React from "react";
import styled from "styled-components";
import Grid from "styled-components-grid";
import Text from "./common/Text";

const Specs = styled.div`
    margin:10px 0;
    padding: 10px;
    border: 1px solid #dfdfdf;
`;

const TextContainer = styled.div`
    padding: 10px;
    border-bottom: 1px solid #dfdfdf;
    height: 30px;
`

const Container = styled.div`
    margin-top: 30px;
`

export interface SpecificationProps {
    specs: { type: string; value: string }[];
}

export const Specification: React.FC<SpecificationProps> = ({specs}: SpecificationProps) => (
    <Container>
        <Text form="h2" type="primary">Specification</Text>
        <Specs>
            {specs.map((item) => (
                <Grid>
                    <Grid.Unit size={3 / 12}>
                        <TextContainer>
                            <Text type="primary" form="normal">{item.type}</Text>
                        </TextContainer>
                    </Grid.Unit>
                    <Grid.Unit size={9 / 12}>
                        <TextContainer>
                            <Text type="primary" form="paragraph">{item.value}</Text>
                        </TextContainer>
                    </Grid.Unit>
                </Grid>
            ))}
        </Specs>
    </Container>
);
