import { HotelList } from "components/organisms";
import React from "react";
import { connect } from "react-redux";
import { Hotels } from "types/hotels";

const mapStateToProps = (state: { hotels: Hotels }) => {
  return { hotels: state.hotels };
};

export default connect(mapStateToProps)(HotelList);