import React, { FC } from "react";
import { Hotel } from "types/hotels";

interface Props {
  hotel: Hotel;
}

const HotelCard: FC<Props> = (props) => {
  const { hotel } = props;
  console.log(JSON.stringify(hotel));

  return (
    <div>
      <a href={hotel[0].hotelInformationUrl}>{hotel[0].hotelName}</a>
    </div>
  );
};

export default HotelCard;