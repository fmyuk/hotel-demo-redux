import { searchHotels } from "lib/hotels";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "store/store";
import { Hotels, HotelsAction } from "types/hotels";

export const handleClickOnSearch = (): ThunkAction<
  void,
  StoreState,
  undefined,
  HotelsAction
> => async (dispatch, getState) => {
  const state = getState();
  const { search } = state;
}