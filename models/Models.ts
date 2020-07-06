export interface ProductDetailsRootState {
  hierarchy: string[]
  offers: string[]
  optionTypes: OptionType[]
  synopsis: string
  features: { title: string; description: string; image: string }[]
  specs: { type: string; value: string }[]
}

export interface VariantDetailsRootState {
  title: string
  rating: number
  price: {mrp: number, sellingPrice: number}
  currentOptions: Options[]
  images: string[]
}


export interface VariantDetails {
  title: string;
  rating: number;
  price: { mrp: number; sellingPrice: number };
}

export interface ProductDetailsModel {
  offers: string[];
  hierarchy: string[];
  optionTypes: OptionType[];
}

export interface OptionType {
  type: string;
  options: string[];
}

export interface Options {
  type: string;
  value: string;
}
