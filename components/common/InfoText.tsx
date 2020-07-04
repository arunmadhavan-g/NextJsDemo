import React from "react"
import * as Icon from "react-bootstrap-icons";
import Text from "./Text";
import {FaInfoCircle} from "react-icons/fa";
import styled from "@emotion/styled";

export interface InfoTextProps {
    text: string;
}

const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  width: fit-content;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    & svg{
        margin: 5px;
    }
    
    &:hover .tooltip {
      visibility: visible;
    }
`
export const InfoText: React.FC<InfoTextProps> = ({text}: InfoTextProps) => <Container>
    <Icon.Tag/>
    <Text form="small" type="primary">{text}</Text>
    <FaInfoCircle/>
    <ToolTip className="tooltip">{text}</ToolTip>
</Container>
