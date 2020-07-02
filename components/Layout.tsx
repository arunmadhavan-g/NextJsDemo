import React, {ReactNode} from "react";
import Grid from 'styled-components-grid';
import {MenuBar} from "./MenuBar";
import styled from "styled-components";

const Body = styled.div`
    margin: 20px 50px;
`

export interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) =>
    <Body>
        <Grid>
            <Grid.Unit size={12 / 12}><MenuBar/></Grid.Unit>
            <Grid.Unit size={12 / 12}>{children}</Grid.Unit>
        </Grid>
    </Body>

export default Layout;
