import React from "react"
import styled from "styled-components";

const Container = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    height: 100%;
`

const TextBox = styled.input`
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    height: 30px;
    width: 100%;
`

export interface SearchBarProps {
}

export const SearchBar: React.FC<SearchBarProps> = () => <Container>
    <TextBox/>
</Container>
