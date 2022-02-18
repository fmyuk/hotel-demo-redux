import { SearchField } from "components/organisms";
import { getKeyword } from "module/SearchModule/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const SearchContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector(getKeyword);

  const props = {
    keyword: search.keyword,
    onChangeKeyword: (keyword: string) => {
      dispatch(changeKeyword(keyword));
    },
    onClickSearch: () => {
      dispatch();
    }
  };
  return <SearchField {...search} />
}