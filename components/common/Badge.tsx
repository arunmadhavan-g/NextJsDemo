import React, {ReactNode} from "react"
import styled from "@emotion/styled";

export interface BadgeProps {
    prefixIcon?: ReactNode
    skin: "success" | "warning" | "danger"
    size: "small" | "medium" | "large"
    children: ReactNode;
}

const skins = {
    success: {background: "#60bc57", color: "#ffffff"},
    warning: {background: "yellow", color: "#000000"},
    danger: {background: "#ee5951", color: "#ffffff"},
}

const sizes = {
    small: {height: "5px", fontSize: "12px"},
    medium: {height: "10px", fontSize: "14px"},
    large: {height: "20px", fontSize: "18px"}
}

const Container = styled.div`
    background: ${props => skins[props.skin].background};
    color: ${props => skins[props.skin].color};
    height: ${props => sizes[props.size].height};
    font-size: ${props => sizes[props.size].fontSize};
    width: fit-content;
    padding: 10px;
    margin: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PrefixContainer = styled.div`
    margin-right: 10px;
`

export const Badge: React.FC<BadgeProps> = ({skin, size, children, prefixIcon}: BadgeProps) =>
    <Container skin={skin} size={size}>
        <PrefixContainer>{prefixIcon}</PrefixContainer>
        {children}
    </Container>

