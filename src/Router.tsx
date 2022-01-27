import { HotelList, SearchField } from "components/organisms";
import { useCallback, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Hotels } from "types/hotels";

const Router = () => {
  const [hotels, setHotels] = useState<Hotels>([]);

  const handleHotels = useCallback((fetchedHotels: Hotels) => {
    setHotels([...fetchedHotels]);
  }, [setHotels]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<SearchField handleHotels={handleHotels} />} />
        <Route path="/hotelList" element={<HotelList hotels={hotels} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;