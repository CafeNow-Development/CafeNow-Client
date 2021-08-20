import React from "react";

import * as S from "./style";

import * as I from "../../../assets";

const SearchBar: React.FC = () => {
  return (
    <S.SearchBarWrapper>
      <I.SearchIcon />
      <S.SearchBar placeholder="카페 이름 또는 위치를 검색해보세요." />
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
