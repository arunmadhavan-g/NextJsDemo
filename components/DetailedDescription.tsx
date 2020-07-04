import React from "react";
import styled from "styled-components";
import Text from "./common/Text";
import Card from "./common/Card";

export interface DetailedDescriptionProps {
    features: { title: string; description: string; image: string }[];
}

const FeaturesContainer = styled.div`
    border: 1px solid #dfdfdf;
    margin-top: 10px;
`

const Container = styled.div`
    margin-top: 20px;
`
export const DetailedDescription: React.FC<DetailedDescriptionProps> = ({
                                                                            features,
                                                                        }: DetailedDescriptionProps) => {
    return (
        <Container>
            <Text form="h2" type="primary">Product Features</Text>
            <FeaturesContainer>
                {features.map((feature, index) =>
                    <Card title={feature.title}
                          paragraph={feature.description}
                          inverted={index % 2 === 0}
                          imgSrc={feature.image} />

                )}
            </FeaturesContainer>
        </Container>
    );
};
