import React, {ReactNode} from "react"
import styled from "@emotion/styled";


const Container = styled.div`
    height: ${props => `${props.size}px`};
    cursor: pointer;
    width: 100px;
    & > * {
        height: 90%;
        width: 100%;
        object-fit: contain;
    }
    border-style: solid;
    border-width: ${props => props.selected ? "2px" : "1px"};
    border-color: ${props => props.selected ? "#3899EC" : "#dfdfdf"};
    background: ${props => props.selected ? "#dcedfc" : "#ffffff"};
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`

export interface ThumbnailsProps {
    size: number,
    children: ReactNode,
    selected: boolean,
    onClick: Function
}

const Thumbnails: React.FC<ThumbnailsProps> = ({size, children, selected, onClick}: ThumbnailsProps) =>
    <Container size={size} selected={selected} onClick={onClick}>{children}</Container>


export default Thumbnails;
