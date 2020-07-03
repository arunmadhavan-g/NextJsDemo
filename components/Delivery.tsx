import React, { useState } from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";

const Button = styled.button``;
const Badge = styled.div``;
const FormField = styled.div``;
const Label = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  max-width: 100%;
`;
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
    <div style={{ margin: "10px 0", display: "flex", alignItems: "flex-end" }}>
      <FormField>
        <Label>Pincode</Label>
        <input
          type="text"
          maxLength={8}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </FormField>
      <Button style={{ marginLeft: "10px" }} onClick={updateStatus}>
        Check Availability
      </Button>
      <div style={{ marginBottom: "3px", marginLeft: "15px" }}>
        {currentStatus && (
          <Badge skin="success" size="medium" prefixIcon={<Icon.Check />}>
            Available
          </Badge>
        )}
        {!currentStatus && (
          <Badge skin="danger" size="medium" prefixIcon={<Icon.XCircle />}>
            UnAvailable
          </Badge>
        )}
      </div>
    </div>
  );
};
