import React from "react";

import * as S from "./style";

export interface TextProps {
  isMain?: boolean;
  size?: number;
  weight?: "normal" | "bold" | "lighter";
  color?: string;
  label: string;
}

export const Text: React.FC<TextProps> = ({ isMain = false, size, weight, color, label, ...props }) => {
  return (
    <S.TextStyle isMain={isMain} size={size} weight={weight} color={color} {...props}>
      {label}
    </S.TextStyle>
  );
};
