import { Hotels } from "types/hotels";

export const actionTypes = {
  CHANGE_KEYWORD: "CHANGE_KEYWORD",
  RECEIVE_HOTELS: "RECEIVE_HOTELS"
};

export const actionCreators = {
  changeKeyword: (keyword: string) => ({
    type: actionTypes.CHANGE_KEYWORD,
    keyword
  }),
  receiveHotels: (response: Hotels) => ({
    type: actionTypes.RECEIVE_HOTELS,
    response
  })
};