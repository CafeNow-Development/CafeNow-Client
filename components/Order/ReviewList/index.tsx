import React from "react";

import * as S from "./style";

import * as I from "../../../assets";

interface ReviewListProps {}

interface ReviewItemProps {}

const ReviewItem: React.FC<ReviewItemProps> = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

const ReviewList: React.FC<ReviewListProps> = () => {
  return (
    <S.ReviewListWrapper>
      <S.ReviewInfoWrapper>
        <S.ReviewAvgWrapper>
          <S.ReviewAvgText>4.0</S.ReviewAvgText>
          <S.StarWrapper>
            {[1, 1, 1, 1, 0].map((v, i) => (
              <I.Star width={8} height={8} fill={v ? "#FFD29B" : "#C4C4C4"} />
            ))}
          </S.StarWrapper>
        </S.ReviewAvgWrapper>
      </S.ReviewInfoWrapper>
    </S.ReviewListWrapper>
  );
};

export default ReviewList;
