import React from "react";
import ResultList from "./ResultList";
import SearchBar from "./SearchBar";

import * as S from "./style";

interface SearchProps {
  resultList: string[];
}

const Search: React.FC<SearchProps> = ({ resultList }) => {
  return (
    <S.Positioner>
      <SearchBar />
      <ResultList resultList={resultList} />
    </S.Positioner>
  );
};

export default Search;
