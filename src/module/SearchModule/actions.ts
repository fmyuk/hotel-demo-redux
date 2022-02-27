import { Hotels } from "types/hotels";

export const actionTypes = {
  CHANGE_KEYWORD: "CHANGE_KEYWORD"
} as const;

export const actionCreators = {
  changeKeyword: (keyword: string) => ({
    type: actionTypes.CHANGE_KEYWORD,
    keyword
  })
};