import React, { ChangeEvent, useCallback } from "react";
import flex from "styles/utility/flex.module.scss";
import { SearchButton, TextInput } from "components/atoms";

interface Props {
  keyword: string;
  onChangeKeyword: (keyword: string) => void;
  onClickSearch: () => void;
}

const SearchField = ({ keyword, onChangeKeyword, onClickSearch }: Props) => {
  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeKeyword(e.target.value);
  }, []);

  const handleClickSearch = useCallback(() => {
    onClickSearch();
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
        onClick={handleClickSearch}
      />
    </div>
  );
};

export default SearchField;