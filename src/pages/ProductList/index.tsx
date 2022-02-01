import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/shared/ArticleCard";
import Filters from "../Filters";
import { fetchProducts } from "../../state-manager/actions/fetchProducts";
import { StoreState } from "../../state-manager/reducers";
import { Products } from "../../types";
import Pagination from "./Pagination";

const itemsPerPage = 9;
const ProductList = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector(
    (state: StoreState) => state.products
  );

  const [totalPage, setTotalPage] = React.useState(0);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const listOfProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  const goNext = () => setPage(page + 1);

  const goToPreviousPage = () => setPage(page - 1);

  useEffect(() => {
    if (products.length === 0) {
    } else {
      if (products.length < itemsPerPage) {
        setTotalPage(1);
      } else {
        const totalPage = Math.ceil(products.length / itemsPerPage);
        setTotalPage(totalPage);
      }
    }
  }, [products.length]);

  const slicedItems = (items: any) => {
    return items.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);
  };

  return (
    <>
      <div className="content">
        <Filters />
        <div className="articles">
          {listOfProducts.length > 0 &&
            slicedItems(listOfProducts).map(
              (article: Products, index: number) => {
                return <ArticleCard key={index} article={article} />;
              }
            )}
        </div>
        <Pagination
          totalPages={totalPage}
          currentPage={page + 1}
          onNext={goNext}
          onPrevious={goToPreviousPage}
        />
      </div>
    </>
  );
};

export default ProductList;
