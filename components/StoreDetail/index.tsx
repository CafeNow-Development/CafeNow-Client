import React from "react";

import * as S from "./style";

import * as I from "../../assets";

import StoreTitle from "./StoreTitle";
import CafeHour from "./CafeHour";
import StoreContent from "./StoreContent";
import CafeLocation from "./CafeLocation";
import StaffList from "../StaffList";
import ReviewList from "../ReviewList";

enum Business {
  open = "open",
  close = "close",
  setting = "setting",
}

interface StoreDetailProps {
  storeId: number;
  cafeName: string;
  isBusiness: Business;
  cafeAddress: string;
  cafeContent: string;
  cafeWeekendHour: string;
  cafeWeekdayHour: string;
  review: any[];
  staffList: any[];
  locationX?: number;
  locationY?: number;
}

const StoreDetail: React.FC<StoreDetailProps> = ({ storeId, cafeName, isBusiness, cafeContent, cafeAddress, cafeWeekendHour, cafeWeekdayHour, staffList, review, locationX, locationY }) => {
  return (
    <S.Positioner>
      <S.HeaderWrapper>
        <I.BackIcon />
      </S.HeaderWrapper>
      <StoreTitle cafeName={cafeName} isBusiness={isBusiness} />
      <CafeHour cafeWeekdayHour={cafeWeekdayHour} cafeWeekendHour={cafeWeekendHour} />
      <StoreContent cafeContent={cafeContent} />
      <CafeLocation cafeAddress={cafeAddress} locationX={126.824241022347} locationY={35.1900398247968} />
      <StaffList staffList={staffList} />
      <ReviewList reviewList={review} />
      <S.OrderBtnWrapper>
        <S.OrderBtn>주문하기</S.OrderBtn>
      </S.OrderBtnWrapper>
    </S.Positioner>
  );
};

export default StoreDetail;
