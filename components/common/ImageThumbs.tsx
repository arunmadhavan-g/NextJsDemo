import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
    height: 90px;
    cursor: pointer;
    width: 100px;
    & img{
        height: 90%;
        width: 100%;
    object-fit: contain;
    }
}
`;

const ImageThumb = ({src, setImage}: { src: string, setImage: Function }) => (
    <ImageContainer>
        <img src={`${src}`} key={src} onClick={() => setImage(src)}/>
    </ImageContainer>
);

export interface ImageThumbsProps {
    images: string[];
    setImage: (image: string) => void;
}

const ImageThumbs: React.FC<ImageThumbsProps> = ({images, setImage}: ImageThumbsProps) =>
    <Container>
        {images.map((x) => <ImageThumb src={x} setImage={setImage}/>)}
    </Container>

export default ImageThumbs;
