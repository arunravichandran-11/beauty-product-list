export interface Products {
  id: String;
  name: String;
  slug: String;
  brand: String;
  type: String;
  image: String;
  price: Number;
  size: String;
  rating: Number;
}

export interface ProductTypes {
  type: string;
}

export interface ProductBrand {
  brand: string;
}

export enum ActionTypes {
  fetchProducts,
  fetchBrands,
  fetchTypes,
  fetchFilteredProducts,
}

export interface fetchProductsAction {
  type: ActionTypes.fetchProducts;
  payload: Products[];
}

export interface fetchBrandsAction {
  type: ActionTypes.fetchBrands;
  payload: ProductBrand[];
}
export interface fetchTypesAction {
  type: ActionTypes.fetchTypes;
  payload: ProductTypes[];
}
export interface fetchFilteredProductsAction {
  type: ActionTypes.fetchFilteredProducts;
  payload: Products[];
}

export type Actions =
  | fetchProductsAction
  | fetchBrandsAction
  | fetchTypesAction
  | fetchFilteredProductsAction;
