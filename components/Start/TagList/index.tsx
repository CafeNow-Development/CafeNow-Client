import React from "react";

import * as S from "./style";

const starCafe = ["스타벅스", "엔제리너스", "EDIEA", "BULK", "퍼센트", "카페501", "투썸플레이스"];

const TagList: React.FC = () => {
  return (
    <S.TagListWrapper>
      <S.TagListTitleWrapper>⭐인기있는 카페</S.TagListTitleWrapper>
      <S.TagList>
        {starCafe.map(item => (
          <S.TagItem key={item}>{item}</S.TagItem>
        ))}
      </S.TagList>
    </S.TagListWrapper>
  );
};

export default TagList;
