import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

import * as S from "./style";
import TagList from "./TagList";

const Start: React.FC = () => {
  return (
    <S.Positioner>
      <Header />
      <S.MainTitleWrapper>
        <S.MainTitleText>
          카페 어디서나 주문을,
          <br />
          카페나우
        </S.MainTitleText>
      </S.MainTitleWrapper>
      <SearchBar />
      <TagList />
    </S.Positioner>
  );
};

export default Start;
