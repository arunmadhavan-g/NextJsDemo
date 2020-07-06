import {productDetails, variantDetails} from "../../data/ProductData";
import * as Constant from "../types";
import produce from "immer";

export const initialState = {
    productDetails,
    variantDetails: variantDetails,
    cartCount: 0,
};

export const cartReducer = produce((draft, action) => {
    switch(action.type){
        case Constant.ADD_CART:
            draft.cartCount += 1;
            break;
    }
});

export const productReducer = produce((draft, action) => {
    const {type, payload} = action;
    switch(type){
        case Constant.UPDATE_VARIANT:
            draft.variantDetails = payload;
            break;
        case Constant.ADD_CART:
            draft.cartCount = draft.cartCount + 1;
            break;
        case Constant.UPDATE_PRODUCT:
            draft.productDetails = payload;
    }
})

