import React from "react";
import { HotelCard } from "components/atoms";
import { Hotels } from "types/hotels";

type HotelList = {
  hotels: Hotels
};

const HotelList = ({ hotels }: HotelList) => {
  return (
    <div>
      {hotels && (
        hotels.map((hotel, index) => (
          <HotelCard hotel={hotel.hotel} key={index} />
        )))}
    </div>
  );
};

export default HotelList;