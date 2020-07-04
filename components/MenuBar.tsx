import React from "react";
import Grid from "styled-components-grid";
import {SearchBar} from "./SearchBar";
import {Avatar} from "./common/Avatar";
import {Cart} from "./Cart";
import styled from "styled-components";
import {ProductDetailsModel, VariantDetails} from "../models/Models";
import {useSelector} from "react-redux";

export interface MenuBarProps {
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MenuBar: React.FC<MenuBarProps> = () => {
    const cartCount = useSelector((state: { productDetails: ProductDetailsModel, variantDetails: VariantDetails, cartCount:number }) => state.cartCount);
    return (
        <Grid>
            <Grid.Unit size={1 / 12}/>
            <Grid.Unit size={3 / 12}>
                <LogoContainer>
                    <img src="images/poorvika-logo.png"/>
                </LogoContainer>
            </Grid.Unit>
            <Grid.Unit size={5 / 12}>
                <SearchBar/>
            </Grid.Unit>
            <Grid.Unit size={1 / 12}>
                <Avatar userName="Arun Madhavan"/>
            </Grid.Unit>
            <Grid.Unit size={1 / 12}>
                <Cart cartItems={cartCount}/>
            </Grid.Unit>
        </Grid>
    );
};
