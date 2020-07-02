import React from "react"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.div`
    height: 90px;
    width: 100px;
    & img{
        height: 90%;
        width: 100%;
    object-fit: contain;
    }
}
`


const ImageThumb = ({src}) =>
    <ImageContainer>
        <img src={`${src}`} key={src}/>
    </ImageContainer>

export interface ImageThumbsProps {
    images: string[];
}

const ImageThumbs: React.FC<ImageThumbsProps> = ({images}: ImageThumbsProps) =>
    <Container>
        {images.map(x => {
            return <ImageThumb src={x}/>;
        })}
    </Container>

export default ImageThumbs;
