import React from "react";

import * as S from "./style";

interface CafeHourProps {
  cafeWeekdayHour: string;
  cafeWeekendHour: string;
}

const CafeHour: React.FC<CafeHourProps> = ({ cafeWeekdayHour, cafeWeekendHour }) => {
  return (
    <S.CafeHourWrapper>
      <S.CafeHourTitleText>영업시간</S.CafeHourTitleText>
      <S.CafeHour>
        <S.WeekHourWrapper>
          <span>평일</span>
          <p>{cafeWeekdayHour}</p>
        </S.WeekHourWrapper>
        <S.WeekHourWrapper>
          <span>주말</span>
          <p>{cafeWeekendHour}</p>
        </S.WeekHourWrapper>
      </S.CafeHour>
    </S.CafeHourWrapper>
  );
};

export default CafeHour;
