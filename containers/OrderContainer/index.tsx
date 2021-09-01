import React, { useState } from "react";

import { Order } from "../../components";

const OrderContainer: React.FC = () => {
  const [nav, setNav] = useState<string>("menu");
  const [imageNumber, setImageNumber] = useState<number>(0);
  const starCount = [0, 0, 0, 0, 0];
  const CafeImages = [
    "https://www.jeongdong.or.kr/static/portal/img/HKPU_04_04_pic3.jpg",
    "https://lh3.googleusercontent.com/proxy/y4V6OTKF4Nd_pF9-XYH05rs7stJteVcDN3t9KyozwaEblh5shIBh1YQ-HwdCXK3ehjaNBt6mRCojU-6RMKDxhvND8MPBd666Q8H1rVTuD-TBa5qMXSZ5lAmtKnwybIZwgyiNjvxn_6s",
    "https://odden1.speedgabia.com/static/bb/lists/spot-n03-s02/spot_f_n03-s02-01.jpg",
    "https://image.edaily.co.kr/images/photo/files/NP/S/2020/11/PS20111200078.jpg",
  ];
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
  Reviews.map(v => starCount[v.reviewStar - 1]++);
  return <Order menuList={Menus} nav={nav} setNav={setNav} reviewList={Reviews} reviewAvg={reviewAvg} reviewStarCount={starCount} imageNumber={imageNumber} cafeImageList={CafeImages} setImageNumber={setImageNumber} />;
};

export default OrderContainer;
