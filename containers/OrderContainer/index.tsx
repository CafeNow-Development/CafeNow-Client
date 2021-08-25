import React, { useState } from "react";

import { Order } from "../../components";

const OrderContainer: React.FC = () => {
  const [nav, setNav] = useState<string>("menu");
  const Menus = [
    { menuId: 1, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 2, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 3, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 4, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 5, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 6, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
  ];
  const Reviews = [
    { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
    { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
    { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
    { reviewStar: 4.5, reviewContent: "사장님이 친절하세요^^" },
  ];
  return <Order menuList={Menus} nav={nav} setNav={setNav} reviewList={Reviews} />;
};

export default OrderContainer;
