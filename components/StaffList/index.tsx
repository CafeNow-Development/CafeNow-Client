import React from "react";

import * as S from "./style";

interface StaffListProps {
  staffList: StaffItemProps[];
}

interface StaffItemProps {
  staffId: number;
  staffName: string;
}

const StaffItem: React.FC<StaffItemProps> = ({ staffName }) => {
  return (
    <S.StaffItemWrapper>
      <S.StaffItemCircle>
        <span>카페</span>
        <span>나우</span>
      </S.StaffItemCircle>
      <S.StaffInfoWrapper>
        <S.StaffNameText>{staffName} 직원</S.StaffNameText>
        <S.StaffRoleText>직원</S.StaffRoleText>
      </S.StaffInfoWrapper>
    </S.StaffItemWrapper>
  );
};

const StaffList: React.FC<StaffListProps> = ({ staffList }) => {
  return (
    <S.StaffListWrapper>
      <S.StaffListTitleText>카페 직원 및 사장님</S.StaffListTitleText>
      <S.StaffCountText>총 {staffList.length}명</S.StaffCountText>
      {staffList.map(staff => (
        <StaffItem {...staff} key={staff.staffId} />
      ))}
    </S.StaffListWrapper>
  );
};

export default StaffList;
