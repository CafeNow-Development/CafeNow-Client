import React from "react";

import * as S from "./style";

interface StoreContentProps {
  cafeContent: string;
}

const StoreContent: React.FC<StoreContentProps> = ({ cafeContent }) => {
  return (
    <S.StoreContentWrapper>
      <S.StoreContentTitleText>카페소개</S.StoreContentTitleText>
      <S.StoreContent>
        <S.StoreContentText>{cafeContent}</S.StoreContentText>
      </S.StoreContent>
    </S.StoreContentWrapper>
  );
};

export default StoreContent;
