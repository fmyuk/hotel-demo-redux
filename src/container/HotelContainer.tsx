import { HotelList } from "components/organisms";
import React from "react";
import { useSelector } from "react-redux";
import { getHotels } from "module/selectors";

export const HotelContainer = () => {
  const hotels = useSelector(getHotels);

  return (
    <>
      <HotelList hotels={hotels} />
    </>
  );
};