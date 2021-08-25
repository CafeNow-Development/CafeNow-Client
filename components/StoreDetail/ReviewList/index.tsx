import React from "react";

import * as S from "./style";

import * as I from "../../../assets";

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
      <S.StarWrapper>
        {[0, 0, 0, 0, 0].map((v, i) => (
          <I.Star width={25} height={25} fill={i < reviewStar ? "#FFD29B" : "#C4C4C4"} />
        ))}
      </S.StarWrapper>
      <S.ReviewText>{reviewContent}</S.ReviewText>
    </S.ReviewItemWrapper>
  );
};

const ReviewList: React.FC<ReviewListProps> = ({ reviewList }) => {
  return (
    <S.ReviewListWrapper>
      <S.ReviewListTitleWrapper>
        <S.ReviewListTitleText>리뷰</S.ReviewListTitleText>
        <S.ReviewArgText>평균 별점 4점</S.ReviewArgText>
      </S.ReviewListTitleWrapper>
      {reviewList.map(review => (
        <ReviewItem key={review.reviewContent} {...review} />
      ))}
    </S.ReviewListWrapper>
  );
};

export default ReviewList;
