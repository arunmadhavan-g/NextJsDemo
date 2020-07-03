import React from "react";
import styled from "styled-components";

const Text = styled.div``;
const FormField = styled.div``;
const Label = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  max-width: 100%;
`;
export interface SynopsisProps {
  content: string;
}

export const Synopsis: React.FC<SynopsisProps> = ({
  content,
}: SynopsisProps) => (
  <div style={{ margin: "10px 0" }}>
    <FormField>
      <Label>Desctiption</Label>
      <Text>{content}</Text>
    </FormField>
  </div>
);
