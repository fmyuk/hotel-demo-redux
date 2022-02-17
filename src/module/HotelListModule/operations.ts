import { searchHotels } from "lib/hotels";
import { ThunkAction } from "redux-thunk";
import { Hotels, HotelsAction } from "types/hotels";

export const handleClickOnSearch = (): ThunkAction<
  void,
  Hotels,
  undefined,
  HotelsAction
> => async (dispatch, getState) => {
  const state = getState();
  const { keyword } = state;
  const hotels = searchHotels();
}