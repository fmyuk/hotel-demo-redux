import { HotelList } from "components/organisms";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "module/HotelListModule/selectors";
import { fetchHotels } from "module/HotelListModule/operations";

export const HotelContainer = () => {
  const dispatch = useDispatch();
  dispatch(fetchHotels());

  const hotels = useSelector(getHotels);

  return (
    <>
      <HotelList hotels={hotels} />
    </>
  );
};