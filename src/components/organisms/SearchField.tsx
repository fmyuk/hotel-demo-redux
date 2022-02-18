import React, { ChangeEvent, useCallback } from "react";
import flex from "styles/utility/flex.module.scss";
import { SearchButton, TextInput } from "components/atoms";
import { searchHotels } from "lib/hotels";
import { Hotels } from "types/hotels";
import { useNavigate } from "react-router";

interface Props {
  keyword: string;
  onChangeKeyword: (keyword: string) => void;
  onClickSearch: (fetchedHotels: Hotels) => void;
}

const SearchField = ({ keyword, onChangeKeyword, onClickSearch }: Props) => {
  const navigate = useNavigate();

  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeKeyword(e.target.value);
  }, []);

  return (
    <div className={flex.flex__row_center}>
      <TextInput
        onChange={handleInputText}
        value={keyword}
        type={"text"}
      />
      <SearchButton
        label={"Search"}
        onClick={async () => {
          const hotels = await searchHotels(keyword);
          handleHotels([...hotels]);
          navigate("/hotelList")
        }}
      />
    </div>
  );
};

export default SearchField;