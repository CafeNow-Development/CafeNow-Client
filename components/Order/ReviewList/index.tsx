import React from "react";

import * as S from "./style";

import * as I from "../../../assets";
import { ReviewListTitleText } from "../../StoreDetail/ReviewList/style";

interface ReviewListProps {
  reviewList: ReviewItemProps[];
}

interface ReviewItemProps {
  reviewStar: number;
  reviewContent: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ reviewStar, reviewContent }) => {
  return (
    <S.ReviewItemWrapper>
      <div></div>
    </S.ReviewItemWrapper>
  );
};

const ReviewList: React.FC<ReviewListProps> = ({ reviewList }) => {
  return (
    <S.ReviewWrapper>
      <S.ReviewInfoWrapper>
        <S.ReviewAvgWrapper>
          <S.ReviewAvgText>4.0</S.ReviewAvgText>
          <S.StarWrapper>
            {[1, 1, 1, 1, 0].map((v, i) => (
              <I.Star width={10} height={10} fill={v ? "#FFD29B" : "#C4C4C4"} />
            ))}
          </S.StarWrapper>
        </S.ReviewAvgWrapper>
        <S.ReviewGraphWrapper>
          {[20, 10, 5, 9, 1].map((v, i) => (
            <S.ReviewGraphItemWrapper>
              <S.ReviewGraphItemTitleText>{5 - i}점</S.ReviewGraphItemTitleText>
              <S.ReviewGraphItemBar />
              <S.ReviewGraphItemCountText>{v}</S.ReviewGraphItemCountText>
            </S.ReviewGraphItemWrapper>
          ))}
        </S.ReviewGraphWrapper>
      </S.ReviewInfoWrapper>
      <S.ReviewListWrapper>
        <ReviewListTitleText>리뷰 20개</ReviewListTitleText>
        {reviewList.map(item => (
          <ReviewItem {...item} key={item.reviewContent} />
        ))}
      </S.ReviewListWrapper>
    </S.ReviewWrapper>
  );
};

export default ReviewList;
