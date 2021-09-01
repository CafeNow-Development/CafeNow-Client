import React from "react";

import { StoreDetail } from "../../components";

const StoreDetailContainer: React.FC = () => {
  enum Business {
    open = "open",
    close = "close",
    setting = "setting",
  }
  const CafeItem = {
    storeId: 5,
    cafeName: "스타벅스 광산 수완점",
    isBusiness: Business.open,
    cafeContent: "여러분의 카페 단골집 스타벅스 입니다. \n 이곳에서 함께 대화를 나누는 시간을 가져보세요!",
    cafeAddress: "광주 광산구 장신로 134",
    cafeWeekendHour: "09:00 ~ 22:00",
    cafeWeekdayHour: "09:00 ~ 22:00",
    staffList: [
      { staffId: 1, staffName: "김철수" },
      { staffId: 2, staffName: "김상현" },
      { staffId: 3, staffName: "김영희" },
    ],
    review: [
      { reviewStar: 4, reviewContent: "사장님이 친절하세요^^" },
      { reviewStar: 3, reviewContent: "직원 분이 한분 밖에 없어서 그런지 나오는 시간이 좀 걸리네요 ㅠㅠ" },
      { reviewStar: 5, reviewContent: "허니브레드 맛있어요!" },
      { reviewStar: 1, reviewContent: "화장실이 좀 더러워요 ㅠㅠ" },
    ],
  };
  return <StoreDetail {...CafeItem} />;
};

export default StoreDetailContainer;
