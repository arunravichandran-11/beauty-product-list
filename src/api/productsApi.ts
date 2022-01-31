import { httpClient } from "../helpers/httpClient";

export const fetchAllProducts = async () => {
  const productResults = await httpClient.get("/products");
  return productResults.data;
};
