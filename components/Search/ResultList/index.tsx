import React from "react";

import * as S from "./style";

interface ResultListProps {
  resultList: string[];
}

const ResultList: React.FC<ResultListProps> = ({ resultList }) => {
  return (
    <S.ResultListWrapper>
      {resultList.map(item => (
        <S.ResultItem key={item}>{item}</S.ResultItem>
      ))}
    </S.ResultListWrapper>
  );
};

export default ResultList;
