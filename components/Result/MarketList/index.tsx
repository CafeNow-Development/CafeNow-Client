import React from "react";

import * as S from "./style";

enum Business {
  open = "open",
  close = "close",
  setting = "setting",
}

interface CafeItemProps {
  cafeName: string;
  isBusiness: Business;
  cafeWeekendHour: string;
  review: any[];
}

interface CafeListProps {
  cafeList: CafeItemProps[];
}

const BusinessState = {
  open: "영업 중",
  close: "영업 종료",
  setting: "오픈 준비 중",
};

const MarketItem: React.FC<CafeItemProps> = ({ cafeName, isBusiness, cafeWeekendHour, review }) => {
  return (
    <S.MarketItemWrapper>
      <S.CafeNameText>{cafeName}</S.CafeNameText>
      <S.CafeStatusWrapper>
        <S.StatusCircle isBusiness={isBusiness} />
        <S.StatusText>{BusinessState[isBusiness]}</S.StatusText>
        <S.CafeHourText>{cafeWeekendHour}</S.CafeHourText>
      </S.CafeStatusWrapper>
      <S.CafeReviewWrapper>{review.length}개 리뷰</S.CafeReviewWrapper>
    </S.MarketItemWrapper>
  );
};

const MarketList: React.FC<CafeListProps> = ({ cafeList }) => {
  return (
    <S.MarketListWrapper>
      <S.MarketListTitleWrapper>
        <S.MarketListTitleText>스타벅스 관련 검색결과</S.MarketListTitleText>
        <S.MarketListResultCountText>총 {cafeList.length}건</S.MarketListResultCountText>
      </S.MarketListTitleWrapper>
      {cafeList.map(cafe => (
        <MarketItem {...cafe} />
      ))}
    </S.MarketListWrapper>
  );
};

export default MarketList;
