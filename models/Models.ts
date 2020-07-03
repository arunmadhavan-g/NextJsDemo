export interface VariantDetails {
  title: string;
  rating: number;
  price: { mrp: number; sellingPrice: number };
}

export interface ProductDetails {
  offers: string[];
  breadcrumbs: string[];
  optionTypes: OptionType[];
}

export interface OptionType {
  type: string;
  options: string[];
}

export interface Ratings {
  ratings: number[];
}
