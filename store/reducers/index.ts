import { productDetails, variantDB } from "../../data/ProductData";
import * as Constant from "../types";

const initialState = {
  productDetails,
  variantDetails: variantDB["ColorBlueRAM6GBStorage64GB"],
  cartCount: 0,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === Constant.UPDATE_VARIANT) {
    return { ...state, variantDetails: payload };
  }

  if (type === Constant.ADD_CART) {
    return { ...state, cartCount: state.cartCount + 1 };
  }

  return state;
};

export default rootReducer;
