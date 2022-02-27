import { APP_ID, BASE_URL } from "api/config";
import { ThunkAction } from "redux-thunk";
import { StoreState } from "store/store";
import { HotelAction } from "types/hotels";
import { actionCreators } from "./actions";

const { receiveHotels } = actionCreators;

export const fetchHotels = (): ThunkAction<
  void,
  StoreState,
  undefined,
  HotelAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const data = await fetch(BASE_URL + "&applicationId=" + APP_ID + "&keyword=" + state.search.keyword)
      .then(res => res.json())
      .then(data => {
        return data;
      }).catch(error => {
        console.log(error);
      });
    dispatch(receiveHotels(data.hotels));
  } catch (e) {
    console.log("Error");
  }
}