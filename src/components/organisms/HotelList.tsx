import React, { FC } from "react";
import { HotelCard } from "components/atoms";
import { Hotels } from "types/hotels";

interface Props {
  hotels: Hotels;
}

const HotelList: FC<Props> = (props) => {
  const { hotels } = props;

  return (
    <div>
      {hotels.length === 0 ? (
        <div>
          No Hotels found...
        </div>
      ) : (
          hotels.map(hotel => {
            <HotelCard hotel={hotel} />
      }))}
    </div>
  );
};

export default HotelList;