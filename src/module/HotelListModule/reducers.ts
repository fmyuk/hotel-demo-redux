import { Hotels } from "types/hotels";

const initialState: Hotels = [{
  hotel: [],
  keyword: ""
}];

export const hotelReducer = (state = initialState) => {
  return state;
};