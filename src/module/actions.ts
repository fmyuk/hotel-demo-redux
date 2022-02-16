import { Hotels } from "types/hotels";

export const actionTypes = {
  RECEIVE: "RECEIVE_HOTEL_RESPONSE"
};

export const actionCreators = {
  receive: (response: Hotels) => ({
    type: actionTypes.RECEIVE,
    response
  })
};