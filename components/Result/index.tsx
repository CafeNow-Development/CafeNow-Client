import React from "react";
import MarketList from "./MarketList";
import SearchBar from "./SearchBar";

import * as S from "./style";

enum Business {
  open = "open",
  close = "close",
  setting = "setting",
}

interface CafeItemProps {
  cafeName: string;
  isBusiness: Business;
  cafeWeekendHour: string;
  review: any[];
}

interface CafeListProps {
  cafeList: CafeItemProps[];
}

interface ResultProps extends CafeListProps {}

const Result: React.FC<ResultProps> = ({ cafeList }) => {
  return (
    <S.Positioner>
      <SearchBar />
      <MarketList cafeList={cafeList} />
    </S.Positioner>
  );
};

export default Result;
