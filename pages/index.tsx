import React, {useEffect, useReducer} from "react";
import Layout from "../components/Layout";
import ProductDetails from "../components/ProductDetails";
import {createGlobalStyle} from "styled-components";
import Head from "next/head";
import {fetchDefaultVariant, fetchProductDetails} from "../store/actions";
import {initialState, productReducer} from "../store/reducers";

const GlobalStyle = createGlobalStyle`
    font-family: 'Roboto', sans-serif !important;
`
export default function Home() {
    useEffect(() => {
        fetchProductDetails(dispatch);
        fetchDefaultVariant(dispatch);
    }, []);

    const [state, dispatch] = useReducer(productReducer, initialState);
    const {productDetails, variantDetails, cartCount} = state;

    return (
        <Layout cartCount={cartCount}>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <GlobalStyle/>
            <ProductDetails productDetails={productDetails} variantDetails={variantDetails} dispatch={dispatch}/>
        </Layout>
    );
}
