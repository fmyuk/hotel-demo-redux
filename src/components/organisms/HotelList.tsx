import React from "react";
import { HotelCard } from "components/atoms";
import { Hotels } from "types/hotels";

const HotelList = (hotels: Hotels) => {

  hotels.map(hotel => {
    console.log(hotel.hotel[0]);
  })

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