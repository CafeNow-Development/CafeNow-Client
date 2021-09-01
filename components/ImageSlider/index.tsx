import React from "react";

import * as S from "./style";

interface ImageSliderProps {
  imageNumber: number;
  cafeImageList: string[];
  nextImage: () => void;
  prevImage: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageNumber, cafeImageList, nextImage, prevImage }) => {
  return (
    <S.ImageSliderWrapper imageItem={cafeImageList[imageNumber]}>
      <S.SliderBtn onClick={prevImage}>{"<"}</S.SliderBtn>
      <S.SliderBtn onClick={nextImage}>{">"}</S.SliderBtn>
    </S.ImageSliderWrapper>
  );
};

export default ImageSlider;
