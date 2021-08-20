import React from "react";

import { Search } from "../../components";

const SearchContainer: React.FC = () => {
  const resultList = ["스타벅스", "무릎 아파요", "너무 서러워요", "왜 상현이가 늦게 왔을까요...", "너무한 놈"];
  return <Search resultList={resultList} />;
};

export default SearchContainer;
