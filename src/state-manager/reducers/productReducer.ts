import {
  Products,
  ProductTypes,
  ProductBrand,
  ActionTypes,
  Actions,
} from "../../types";

export interface ProductState {
  products: Products[];
  brands: ProductBrand[];
  types: ProductTypes[];
  filteredProducts: Products[];
}

const initialState = {
  products: [],
  brands: [],
  types: [],
  filteredProducts: [],
};

const productReducer = function (
  state: ProductState = initialState,
  action: Actions
) {
  switch (action.type) {
    case ActionTypes.fetchProducts:
      return {
        ...state,
        products: action.payload,
      };

    case ActionTypes.fetchBrands:
      return {
        ...state,
        brands: action.payload,
      };

    case ActionTypes.fetchTypes:
      return {
        ...state,
        types: action.payload,
      };

    case ActionTypes.fetchFilteredProducts:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
