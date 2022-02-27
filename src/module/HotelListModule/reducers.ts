import { HotelAction, Hotels } from "types/hotels";
import { actionTypes } from "./actions";

export const initialState: Hotels = [{
  hotel: []
}];

export const hotelReducer = (state: Hotels = initialState, action: HotelAction) => {
  switch (action.type) {
    case actionTypes.RECEIVE_HOTELS:
      return {
        ...state,
        hotels: action.response
      };
    default:
      return state;
  }
};