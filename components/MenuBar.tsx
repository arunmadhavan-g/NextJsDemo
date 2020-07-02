import React from "react"
import Grid from 'styled-components-grid';
import {SearchBar} from "./SearchBar";
import {User} from "./User";
import {Cart} from "./Cart";
import styled from "styled-components";

export interface MenuBarProps {
}

const LogoContainer = styled.div`
display: flex;
    align-items: center;
    height: 100%;
    `

export const MenuBar: React.FC<MenuBarProps> = () =>
    <Grid>
        <Grid.Unit size={3 / 12}>
            <LogoContainer>
                <img src="images/poorvika-logo.png"/>
            </LogoContainer>
        </Grid.Unit>
        <Grid.Unit size={6 / 12}><SearchBar/></Grid.Unit>
        <Grid.Unit size={1 / 12}><User userName="Arun Madhavan" /></Grid.Unit>
        <Grid.Unit size={1 / 12}><Cart/></Grid.Unit>
    </Grid>
