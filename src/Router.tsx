import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HotelContainer } from "container/HotelContainer";
import { SearchContainer } from "container/SearchContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/hotelList" element={<HotelContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;