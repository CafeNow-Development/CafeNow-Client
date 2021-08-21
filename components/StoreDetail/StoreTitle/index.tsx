import React from "react";

import Image from "next/image";

import * as S from "./style";

import NotImage from "../../../assets/img/NotImage.png";

enum Business {
  open = "open",
  close = "close",
  setting = "setting",
}

interface StoreTitleProps {
  cafeName: string;
  isBusiness: Business;
}

const BusinessState = {
  open: "영업 중",
  close: "영업 종료",
  setting: "오픈 준비 중",
};

const StoreTitle: React.FC<StoreTitleProps> = ({ cafeName, isBusiness }) => {
  return (
    <S.StoreTitleWrapper>
      <S.StoreTitleText>{cafeName}</S.StoreTitleText>
      <S.CafeStatusWrapper>
        <S.StatusCircle isBusiness={isBusiness} />
        <S.StatusText>{BusinessState[isBusiness]}</S.StatusText>
      </S.CafeStatusWrapper>
      <S.ImageWrapper>
        <Image layout="responsive" src={NotImage} />
      </S.ImageWrapper>
    </S.StoreTitleWrapper>
  );
};

export default StoreTitle;
