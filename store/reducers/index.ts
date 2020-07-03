import {productDetails, variantDetails} from "../../data/ProductData";
import * as Constant from "../types";

const initialState = {
    productDetails,
    variantDetails: variantDetails,
    cartCount: 0,
};

const rootReducer = (state = initialState, action) => {
    const {type, payload} = action;
    if (type === Constant.UPDATE_VARIANT) {
        return {...state, variantDetails: payload};
    }

    if (type === Constant.ADD_CART) {
        return {...state, cartCount: state.cartCount + 1};
    }

    if (type === Constant.UPDATE_PRODUCT) {
        console.log("????? Update product", payload);
        return {...state, productDetails: payload};
    }

    return state;
};

export default rootReducer;
