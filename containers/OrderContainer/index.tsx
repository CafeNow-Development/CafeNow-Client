import React, { useState } from "react";

import { Order } from "../../components";

const OrderContainer: React.FC = () => {
  const [nav, setNav] = useState<string>("menu");
  const CafeImages = ["https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic3.jpg", "https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic3.jpg", "https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic3.jpg", "https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic3.jpg"];
  const Menus = [
    { menuId: 1, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 2, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 3, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 4, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 5, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
    { menuId: 6, menuName: "나이트로 바닐라 크림", menuPrice: 5600, menuImage: "" },
  ];
  const Reviews = [
    { reviewStar: 4, reviewContent: "사장님이 친절하세요^^" },
    { reviewStar: 2, reviewContent: "사장님이 친절하세요^^" },
    { reviewStar: 3, reviewContent: "사장님이 친절하세요^^" },
    { reviewStar: 5, reviewContent: "사장님이 친절하세요^^" },
  ];
  const reviewAvg = Reviews.map(v => v.reviewStar).reduce((a, c) => a + c) / Reviews.length;

  return <Order menuList={Menus} nav={nav} setNav={setNav} reviewList={Reviews} reviewAvg={reviewAvg} />;
};

export default OrderContainer;
