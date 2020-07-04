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
    border: 1px solid;
    border-color: ${props => props.selected ? "#3899EC" : "#dfdfdf"};
    margin: 5px 0;
    display: flex;
    align-items: center;
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
