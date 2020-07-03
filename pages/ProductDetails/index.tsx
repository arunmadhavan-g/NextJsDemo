import React from "react";
import Layout from "../../components/Layout";
import ProductDetails from "../../components/ProductDetails";
import store from "../../store";
import {Provider} from "react-redux";

export default function Home() {
    return (
        <Layout>
            <Provider store={store}>
                <ProductDetails/>
            </Provider>
        </Layout>
    );
}
