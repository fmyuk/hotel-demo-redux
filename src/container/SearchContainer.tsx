import React from "react";
import { SearchField } from "components/organisms";
import { getKeyword } from "module/SearchModule/selectors";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "module/SearchModule/actions";
import { useNavigate } from "react-router";
import { fetchHotels } from "module/HotelListModule/operations";

export const SearchContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector(getKeyword);

  const props = {
    keyword: search.keyword,
    onChangeKeyword: (keyword: string) => {
      dispatch(actionCreators.changeKeyword(keyword));
    },
    onClickSearch: () => {
      dispatch(fetchHotels());
      navigate("/hotelList");
    }
  };
  return <SearchField {...props} />
}