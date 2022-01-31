import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/shared/ArticleCard";
import Filters from "../Filters";

import { fetchProducts } from "../../state-manager/actions/fetchProducts";

import { StoreState } from "../../state-manager/reducers";
import { Products } from "../../types";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector(
    (state: StoreState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const listOfProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <>
      <div className="content">
        <Filters />
        <div className="articles">
          {listOfProducts.length > 0 &&
            listOfProducts.map((article: Products, index: number) => {
              return <ArticleCard key={index} article={article} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
