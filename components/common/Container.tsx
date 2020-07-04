import React, {ReactNode} from "react"
import styled from "styled-components";

const CommonContainer = styled.div`
    margin: 10px 0;
`

export interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}: ContainerProps) =>
    <CommonContainer>{children}</CommonContainer>


export default Container;
