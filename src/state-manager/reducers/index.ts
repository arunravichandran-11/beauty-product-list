import { combineReducers } from "redux";
import productReducer, { ProductState } from "./productReducer";

export interface StoreState {
  products: ProductState;
}

export const rootReducer = combineReducers<StoreState>({
  products: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
