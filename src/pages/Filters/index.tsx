import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import {
  filterProductByBrand,
  filterProductByType,
} from "../../state-manager/actions/fetchProducts";
import { StoreState } from "../../state-manager/reducers";
import "./filter.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const { brands, types } = useSelector((state: StoreState) => state.products);
  const [brand, setBrand] = React.useState([]);
  const [productType, setProductType] = React.useState([]);

  const handleChange = (selectedList: any) => {
    setBrand(selectedList);
  };
  const handleProductTypeChange = (selectedList: any) => {
    setProductType(selectedList);
  };

  useEffect(() => {
    dispatch(filterProductByBrand(brand));
  }, [brand, dispatch]);

  useEffect(() => {
    dispatch(filterProductByType(productType));
  }, [productType, dispatch]);

  return (
    <div className="filter-container">
      <div className="filter-items">
        <h3 style={{ margin: "8px 0px" }}>Brand</h3>
        <Multiselect
          hidePlaceholder
          options={brands}
          selectionLimit={3}
          onSelect={handleChange}
          onRemove={handleChange}
          selectedValues={brand}
          displayValue="brand"
          showCheckbox
          keepSearchTerm={false}
        />
      </div>
      <div className="filter-items">
        <h3 style={{ margin: "8px 0px" }}>Type</h3>
        <Multiselect
          hidePlaceholder
          options={types}
          selectionLimit={3}
          onSelect={handleProductTypeChange}
          onRemove={handleProductTypeChange}
          selectedValues={productType}
          displayValue="productTypes"
          showCheckbox
          keepSearchTerm={false}
        />
      </div>
    </div>
  );
};

export default Filters;
