import React, { forwardRef, Ref } from "react";

import * as S from "./style";

type KakaomapComponentProps = {
  ref: Ref<HTMLDivElement>;
};
const KakaomapComponent: React.FC<KakaomapComponentProps> = forwardRef((props, ref) => {
  return <S.KaKaoMapWrapper ref={ref} />;
});

export default KakaomapComponent;
