import { HotelList, SearchField } from "components/organisms";
import { useCallback, useState } from "react";
import { Route, Routes } from "react-router";
import { Hotels } from "types/hotels";

const Router = () => {
  const [hotels, setHotels] = useState<Hotels>([]);

  const handleHotels = useCallback((fetchedHotels: Hotels) => {
    setHotels([...fetchedHotels]);
  }, [setHotels]);

  return (
    <Routes>
      <Route path="/" element={<SearchField handleHotels={handleHotels} />} />
      <Route path="/hotelList" element={<HotelList hotels={hotels} />} />
    </Routes>
  );
};

export default Router;