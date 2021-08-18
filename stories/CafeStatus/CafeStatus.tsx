import React from "react";

import * as S from "./style";

export interface CafeStatusProps {
  status: "open" | "close" | "setting";
}

const StatusText = {
  open: "영업 중",
  close: "영업 종료",
  setting: "오픈 준비 중",
};

export const CafeStatus: React.FC<CafeStatusProps> = ({ status }) => {
  return (
    <S.CafeStatusWrapper>
      <S.StatusCircle status={status}></S.StatusCircle>
      <S.StatusText>{StatusText[status]}</S.StatusText>
    </S.CafeStatusWrapper>
  );
};
