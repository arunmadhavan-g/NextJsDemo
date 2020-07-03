import * as Constant from "../types";
import {getProductDetails, getVariantDetails} from "../api";
import {Options} from "../../models/Models";


export const fetchProductDetails = (dispatch: Function) => {
    getProductDetails().then(productDetails => {
            console.log("?????", productDetails);
            return dispatch({type: Constant.UPDATE_PRODUCT, payload: productDetails});
        }
    );
}

export const fetchDefaultVariant = (dispatch: Function) => {
    const defaultOptions = [
        {type: "Color", value: "Blue"},
        {type: "Storage", value: "64GB"},
        {type: "RAM", value: "6GB"}
    ];
    getVariantDetails(defaultOptions).then(x => dispatch({type: Constant.UPDATE_VARIANT, payload: x}))
}

export const changeOptionType = (
    type: string,
    value: string,
    currentOptions: Options[],
    dispatch: Function
) => {
    const newCurrentOptions = [
        ...currentOptions.filter((x) => x.type !== type),
        {type, value},
    ];
    getVariantDetails(newCurrentOptions).then(newVariantDetail => dispatch({
        type: Constant.UPDATE_VARIANT,
        payload: newVariantDetail
    }));
};

export const addToCart = () => ({type: Constant.ADD_CART});
