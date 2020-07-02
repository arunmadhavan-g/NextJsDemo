import React from "react"
import styled from "styled-components";

export interface MainImageProps {
    image: string
}

const Container = styled.div`
        display: flex;
        justify-content: center;
`

const MainImage: React.FC<MainImageProps> = ({image}: MainImageProps) => <Container>
    <img src={image}/>
</Container>


export default MainImage;
