import axios from "axios";
import {
  Options,
  ProductDetailsModel,
  VariantDetails,
} from "../../models/Models";
import { productDetails } from "../../data/ProductData";

const baseUrl = "https://ajira-poorvika-golang-poc.herokuapp.com";
// const baseUrl = "http://localhost:3000";
const getProductDetails = async (): Promise<ProductDetailsModel> => {
  try {
    const productDetails: ProductDetailsModel = (
      await axios.get(`${baseUrl}/product-details`)
    ).data;
    return productDetails;
  } catch (e) {
    console.log(e);
  }
  return productDetails;
};

const findTypeValue = (optionsArray: Options[], type: string) => {
  const option = optionsArray.find((x) => x.type === type);
  return option ? option.value : null;
};

const getVariantDetails = async (
  options: Options[]
): Promise<VariantDetails> => {
  const lookupKey = ["Color", "RAM", "Storage"].reduce(
    (acc, x) => `${acc}${x}${findTypeValue(options, x)}`,
    ""
  );
  const variantDetails: VariantDetails = (
    await axios.get(`${baseUrl}/product-variants/${lookupKey}`)
  ).data;
  return variantDetails;
};

export { getProductDetails, getVariantDetails };
