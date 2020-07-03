import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -30px;
`;

const TextBox = styled.input`
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  height: 30px;
  width: 100%;
`;

export interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => (
  <Container>
    <TextBox />
    <SearchIconContainer>
      <FaSearch size={20} />
    </SearchIconContainer>
  </Container>
);
