import { combineReducers } from "redux";
import { hotelReducer } from "module/HotelListModule/reducers";
import { searchReducer } from "module/SearchModule/reducers";

export const store = combineReducers({
    hotels: hotelReducer,
    search: searchReducer
});

export type StoreState = ReturnType<typeof store>;