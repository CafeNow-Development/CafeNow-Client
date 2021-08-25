import React from "react";
import ImageSlider from "../ImageSlider";

import * as S from "./style";

import * as I from "../../assets";
import MenuList from "./MenuList";
import ReviewList from "./ReviewList";

interface MenuItemProps {
  menuId: number;
  menuName: string;
  menuPrice: number;
  menuImage: string;
}

interface OrderProps {
  nav: string;
  setNav: (nav: string) => void;
  menuList: MenuItemProps[];
}

const Order: React.FC<OrderProps> = ({ menuList, nav, setNav }) => {
  return (
    <S.Positioner>
      <ImageSlider />
      <S.Wrapper>
        <S.OrderCafeInfoWrapper>
          <S.CafeNameText>스타벅스 광산 수완점</S.CafeNameText>
          <S.StarWrapper>
            {[1, 1, 1, 1, 0].map(v => (
              <I.Star width={27} height={27} fill={v ? "#FFD29B" : "#C4C4C4"} />
            ))}
            <S.StarText>4점</S.StarText>
          </S.StarWrapper>
        </S.OrderCafeInfoWrapper>
        <S.NavWrapper nav={nav}>
          <S.NavItemWrapper onClick={() => setNav("menu")}>메뉴</S.NavItemWrapper>
          <S.NavItemWrapper onClick={() => setNav("review")}>리뷰</S.NavItemWrapper>
        </S.NavWrapper>
        {nav === "menu" ? <MenuList menuList={menuList} /> : <ReviewList />}
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Order;
