import React from "react";

import { Result } from "../../components";

enum Business {
  open = "open",
  close = "close",
  setting = "setting",
}

const ResultContainer: React.FC = () => {
  const CafeList = [
    { storeId: 1, cafeName: "스타벅스 광산 수완점", isBusiness: Business.open, cafeWeekendHour: "오늘 09:00 ~ 22:00", review: [{ reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" }] },
    {
      storeId: 2,
      cafeName: "스타벅스 광산 수완점",
      isBusiness: Business.close,
      cafeWeekendHour: "오늘 09:00 ~ 22:00",
      review: [
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
      ],
    },
    {
      storeId: 3,
      cafeName: "스타벅스 광산 수완점",
      isBusiness: Business.setting,
      cafeWeekendHour: "오늘 09:00 ~ 22:00",
      review: [{ reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" }],
    },
    {
      storeId: 4,
      cafeName: "스타벅스 광산 수완점",
      isBusiness: Business.close,
      cafeWeekendHour: "오늘 09:00 ~ 22:00",
      review: [{ reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" }],
    },
    {
      storeId: 5,
      cafeName: "스타벅스 광산 수완점",
      isBusiness: Business.open,
      cafeWeekendHour: "오늘 09:00 ~ 22:00",
      review: [{ reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" }],
    },
    {
      storeId: 6,
      cafeName: "스타벅스 광산 수완점",
      isBusiness: Business.setting,
      cafeWeekendHour: "오늘 09:00 ~ 22:00",
      review: [
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
        { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
      ],
    },
    {
      storeId: 7,
      cafeName: "스타벅스 광산 수완점",
      isBusiness: Business.open,
      cafeWeekendHour: "오늘 09:00 ~ 22:00",
      review: [{ reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" }],
    },
  ];
  return <Result cafeList={CafeList} />;
};

export default ResultContainer;
