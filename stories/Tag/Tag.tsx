import React from "react";

import * as S from "./style";

interface TagProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
}

export const Tag: React.FC<TagProps> = ({ primary = false, backgroundColor, label = "Tag" }) => {
  return (
    <S.TagWrapper backgroundColor={backgroundColor}>
      <S.TagText>{label}</S.TagText>
    </S.TagWrapper>
  );
};
