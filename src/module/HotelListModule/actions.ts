import { Hotels } from "types/hotels";

export const actionTypes = {
  RECEIVE_HOTELS: "RECEIVE_HOTELS"
} as const;

export const actionCreators = {
  receiveHotels: (response: Hotels) => ({
    type: actionTypes.RECEIVE_HOTELS,
    response
  })
};