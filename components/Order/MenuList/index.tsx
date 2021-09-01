import React from "react";

import * as S from "./style";

import MenuImage from "../../../assets/img/MenuImage.png";
import Image from "next/image";

interface MenuListProps {
  menuList: MenuItemProps[];
}

interface MenuItemProps {
  menuId: number;
  menuName: string;
  menuPrice: number;
  menuImage: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ menuName, menuImage, menuPrice }) => {
  return (
    <S.MenuItemWrapper>
      <S.MenuItemInfoWrapper>
        <S.MenuNameText>{menuName}</S.MenuNameText>
        <S.MenuPriceText>{menuPrice.toLocaleString()}원</S.MenuPriceText>
      </S.MenuItemInfoWrapper>
      <S.MenuImageWrapper>
        <Image width={66} height={66} src={MenuImage} />
      </S.MenuImageWrapper>
    </S.MenuItemWrapper>
  );
};

const MenuList: React.FC<MenuListProps> = ({ menuList }) => {
  return (
    <S.MenuListWrapper>
      {menuList.map(menu => (
        <MenuItem key={menu.menuId} {...menu} />
      ))}
    </S.MenuListWrapper>
  );
};

export default MenuList;
