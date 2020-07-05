import React, {useState} from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import Text from "./common/Text";
import Button from "./common/Button";
import {Badge} from "./common/Badge";

//const Button = styled.button``;
// const Badge = styled.div``;

const Input = styled.input`
    width: 300px;
    border: 1px solid #dfdfdf;
    height: 30px;
    border-radius: 5px;
    margin-right: 20px;
    padding: 0 5px;
`;
const Container = styled.div`
    margin: 5px 0; 
    display: flex;
    align-items: center;
`

export interface DeliveryProps {
    status: boolean;
    getStatus: (zipCode: string) => boolean;
}

export const Delivery: React.FC<DeliveryProps> = ({
                                                      status,
                                                      getStatus,
                                                  }: DeliveryProps) => {
    const [currentStatus, setCurrentStatus] = useState(status);
    const [zipCode, setZipCode] = useState(null);
    const updateStatus = async () => {
        setCurrentStatus(await getStatus(zipCode));
    };

    return (
        <>

            <Text form="normal" type="primary">Pincode</Text>
            <Container>
                <Input
                    type="text"
                    maxLength={8}
                    onChange={e => setZipCode(e.target.value)}
                />

                <Button size="small" type="secondary" onClick={updateStatus}>
                    Check Availability
                </Button>

                {currentStatus && (
                    <Badge skin="success" size="medium" prefixIcon={<Icon.Check/>}>
                        Available
                    </Badge>
                )}
                {!currentStatus && (
                    <Badge skin="danger" size="medium" prefixIcon={<Icon.XCircle/>}>
                        UnAvailable
                    </Badge>
                )}

            </Container>
        </>
    );
};
