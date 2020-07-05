import React from "react";
import styled from "styled-components";
import Thumbnails from "./Thumbnails";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageThumb = ({src, image, setImage}: { src: string, image: string, setImage: Function }) => (
    <Thumbnails size={60} selected={src === image} onClick={() => setImage(src)}>
        <img src={`${src}`} key={src}/>
    </Thumbnails>
);

export interface ImageThumbsProps {
    images: string[];
    image: string;
    setImage: (image: string) => void;
}

const ImageThumbs: React.FC<ImageThumbsProps> = ({images, image, setImage}: ImageThumbsProps) =>
    <Container>
        {images.map((x) => <ImageThumb src={x} setImage={setImage} image={image}/>)}
    </Container>

export default ImageThumbs;
