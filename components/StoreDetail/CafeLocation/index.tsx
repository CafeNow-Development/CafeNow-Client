import React, { useEffect } from "react";
import { KaKaoMap } from "../../../components";

import * as S from "./style";

interface CafeLocationProps {
  cafeAddress: string;
  locationX: number;
  locationY: number;
}

const CafeLocation: React.FC<CafeLocationProps> = ({ cafeAddress, locationX, locationY }) => {
  return (
    <S.CafeLocationWrapper>
      <S.CafeLocationTitleText>위치</S.CafeLocationTitleText>
      <S.CafeLocationText>{cafeAddress}</S.CafeLocationText>
      <KaKaoMap x={locationX} y={locationY} />
    </S.CafeLocationWrapper>
  );
};

export default CafeLocation;
