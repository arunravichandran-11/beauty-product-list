import { fetchAllProducts } from "../../api/productsApi";
import { Dispatch } from "redux";
import { removeDuplicates } from "../../utils/filterDuplicate";
import { StoreState } from "../reducers";

import {
  Products,
  ActionTypes,
  fetchFilteredProductsAction,
  fetchBrandsAction,
  fetchTypesAction,
  fetchProductsAction,
  ProductBrand,
  ProductTypes,
} from "../../types";

/**
 * Initially Fetches all products and filter the unique brands and types out of it.
 * @returns | Dispatch ActionTypes.fetchProducts, ActionTypes.fetchBrands, ActionTypes.fetchTypes
 */
export const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    const data: Products[] = await fetchAllProducts();
    const uniqueBrandItems = removeDuplicates(data, "brand");
    const uniqueProductTypes = removeDuplicates(data, "type");

    const brandList = uniqueBrandItems.map((item: ProductBrand) => {
      return {
        brand: item.brand,
      };
    });

    const productTypes = uniqueProductTypes.map((item: ProductTypes) => {
      return {
        productTypes: item.type,
      };
    });

    dispatch<fetchProductsAction>({
      type: ActionTypes.fetchProducts,
      payload: data,
    });

    dispatch<fetchBrandsAction>({
      type: ActionTypes.fetchBrands,
      payload: brandList,
    });

    dispatch<fetchTypesAction>({
      type: ActionTypes.fetchTypes,
      payload: productTypes,
    });
  } catch (error) {}
};

/**
 * Filters the store state (Products) based on brand chosen
 * Note: This is doing the normal filter of state object which can be taken care in component itself. Yet written an action creator
 * and store state for a reason:
 * Reason: In real world, the filters will mostly be an API call due to huge volume.
 * So the following action creators can call another api service to fetch the results and updates the same Product {} object in store.
 * @param brands | ProductBrand
 * @returns Dispatch
 */
export const filterProductByBrand =
  (brands: ProductBrand[]) =>
  async (dispatch: Dispatch, getState: () => StoreState) => {
    try {
      const { products } = getState();
      let result: Products[] = [];

      brands.forEach((brandObj: ProductBrand) => {
        const filtered = products.products.filter((item: Products) => {
          if (item.brand === brandObj.brand) {
            return item;
          }
          return null;
        });
        result = [...result, ...filtered];
      });

      dispatch({
        type: ActionTypes.fetchFilteredProducts,
        payload: result,
      });
    } catch (error) {}
  };

/**
 * Filters the store state (Products) based on Type chosen
 * Note: This is doing the normal filter of state object which can be taken care in component itself. Yet written an action creator
 * and store state for a reason:
 * Reason: In real world, the filters will mostly be an API call due to huge volume.
 * So the following action creators can call another api service to fetch the results and updates the same Product {} object in store.
 * @param brands | ProductType
 * @returns Dispatch
 */
export const filterProductByType =
  (productTypes: ProductTypes[]) =>
  async (dispatch: Dispatch, getState: () => StoreState) => {
    try {
      const { products } = getState();
      let result: Products[] = [];

      productTypes.forEach((product: any) => {
        const filtered = products.products.filter((item: Products) => {
          if (item.type === product.productTypes) {
            return item;
          }
          return null;
        });
        result = [...result, ...filtered];
      });

      dispatch<fetchFilteredProductsAction>({
        type: ActionTypes.fetchFilteredProducts,
        payload: result,
      });
    } catch (error) {}
  };
