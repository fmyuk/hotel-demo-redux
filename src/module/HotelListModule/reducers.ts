import { Hotels } from "types/hotels";

export const initialState: Hotels = [{
  hotel: []
}];

export const hotelReducer = (state = initialState) => {
  return state;
};