import React, { FC } from "react";
import { Hotel } from "types/hotels";

interface Props {
  hotel: Hotel[];
}

const HotelCard: FC<Props> = (props) => {
  const { hotel } = props;

  return (
    <div>
      <a href={hotel[0].hotelBasicInfo.hotelInformationUrl}>{hotel[0].hotelBasicInfo.hotelName}</a>
    </div>
  );
};

export default HotelCard;