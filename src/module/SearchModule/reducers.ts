import { Search, SearchAction } from "types/search";
import { actionTypes } from "./actions";

export const initialState: Search = {
  keyword: ""
};

export const searchReducer = (state: Search = initialState, action: SearchAction) => {
  switch (action.type) {
    case actionTypes.CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      }
    default:
      return state;
  }
};