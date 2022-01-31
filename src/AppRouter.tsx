import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/core/Header";
import Footer from "./components/core/Footer";

import ProductList from "./pages/ProductList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header className="header"></Header>
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
        </Routes>
        <Footer className="footer">
          flaconi - https://www.flaconi.de - Order perfume, care & make-up
          online now at Flaconi! -Franklinstrasse 15a , D-10587 Berlin - The
          Flaconi online shop achieved a very good customer rating of 4.85
          (rating scale: 1 to 5 ) from 140,749 ratings.
        </Footer>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
