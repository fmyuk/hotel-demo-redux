import { Reducer } from "redux";
import { HotelAction, Hotels } from "types/hotels";
import { actionTypes } from "./actions";

export const initialState: Hotels = [{
  hotel: []
}];

export const hotelReducer: Reducer<Hotels, any> = (state: Hotels = initialState, action: HotelAction) => {
  switch (action.type) {
    case actionTypes.RECEIVE_HOTELS:
      return action.response;
    default:
      return state;
  }
};