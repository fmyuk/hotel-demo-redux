import { SearchField } from "components/organisms";
import { getKeyword } from "module/SearchModule/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const SearchContainer = () => {
  const search = useSelector(getKeyword);

  return <SearchField {...search} />
}