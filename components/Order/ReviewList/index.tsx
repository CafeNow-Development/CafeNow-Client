import React from "react";

import * as S from "./style";

import * as I from "../../../assets";

import { ReviewListTitleText } from "../../StoreDetail/ReviewList/style";
interface ReviewListProps {
  reviewList: ReviewItemProps[];
  reviewStarCount: number[];
  reviewAvg: number;
}

interface ReviewItemProps {
  reviewStar: number;
  reviewContent: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ reviewStar, reviewContent }) => {
  return (
    <S.ReviewItemWrapper>
      <S.ReviewItemProfileCircle>
        <span>카페</span>
        <span>나우</span>
      </S.ReviewItemProfileCircle>
      <S.ReviewItemInfoWrapper>
        <S.ReviewItemStarWrapper>
          {[0, 0, 0, 0, 0].map((v, i) => (
            <I.Star key={i} width={25} height={25} fill={i + 1 <= reviewStar ? "#FFD29B" : "#C4C4C4"} />
          ))}
        </S.ReviewItemStarWrapper>
        <S.ReviewInfoText>{reviewContent}</S.ReviewInfoText>
      </S.ReviewItemInfoWrapper>
    </S.ReviewItemWrapper>
  );
};

const ReviewList: React.FC<ReviewListProps> = ({ reviewList, reviewStarCount, reviewAvg }) => {
  return (
    <S.ReviewWrapper>
      <S.ReviewInfoWrapper>
        <S.ReviewAvgWrapper>
          <S.ReviewAvgText>{reviewAvg}</S.ReviewAvgText>
          <S.StarWrapper>
            {[1, 1, 1, 1, 0].map((v, i) => (
              <I.Star key={i} width={10} height={10} fill={v ? "#FFD29B" : "#C4C4C4"} />
            ))}
          </S.StarWrapper>
        </S.ReviewAvgWrapper>
        <S.ReviewGraphWrapper>
          {reviewStarCount.map((v, i) => (
            <S.ReviewGraphItemWrapper>
              <S.ReviewGraphItemTitleText>{5 - i}점</S.ReviewGraphItemTitleText>
              <S.ReviewGraphItemBarWrapper>
                <S.ReviewGraphItemBar count={v} length={reviewList.length} />
              </S.ReviewGraphItemBarWrapper>
              <S.ReviewGraphItemCountText>{v}</S.ReviewGraphItemCountText>
            </S.ReviewGraphItemWrapper>
          ))}
        </S.ReviewGraphWrapper>
      </S.ReviewInfoWrapper>
      <S.ReviewListWrapper>
        <ReviewListTitleText>리뷰 {reviewList.length}개</ReviewListTitleText>
        {reviewList.map(item => (
          <ReviewItem {...item} key={item.reviewContent} />
        ))}
      </S.ReviewListWrapper>
    </S.ReviewWrapper>
  );
};

export default ReviewList;
