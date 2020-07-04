import React, {ReactNode} from "react"
import styled from "@emotion/styled";

export interface ButtonProps {
    type: "primary" | "secondary" | "danger"
    size: "large" | "small"
    prefixIcon: ReactNode
    onClick: Function
    children: ReactNode
}

const Container = styled.div`
    display:flex;
`
const sizes = {
    large: {"min-width": "200px", "min-height": "50px", "font-size": "large"},
    small: {"min-width": "none", "min-height": "none", "font-size": "small"},
}

const types = {
    "primary": {background: "#3899EC", color: "#FFFFFF", "border-color": "#3899EC"},
    "secondary": {background: "#dfdfdf", color: "#000000", "border-color": "#dfdfdf"},
    "danger": {background: "#EE5951", color: "#FFFFFF", "border-color": "#EE5951"}
}

const ButtonElement = styled.button`
    width:auto;
    min-width: ${props => sizes[props.size]["min-width"]};
    min-height: ${props => sizes[props.size]["min-height"]};
    font-size: ${props => sizes[props.size]["font-size"]};
    background: ${props => types[props.nature].background};
    color: ${props => types[props.nature].color};
    border-color: ${props => types[props.nature]["border-color"]};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PrefixContainer = styled.div`
    margin-right: 10px;
`

const Button: React.FC<ButtonProps> = ({type, size, prefixIcon, onClick, children}: ButtonProps) =>
    <Container onClick={onClick}>
        <ButtonElement size={size} nature={type}>
            {prefixIcon && <PrefixContainer>{prefixIcon}</PrefixContainer>}
            {children}
        </ButtonElement>
    </Container>

export default Button;
