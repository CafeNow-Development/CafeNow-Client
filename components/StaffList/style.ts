import styled from "styled-components"

export const StaffListWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom : 55px;
`;

export const StaffListTitleText = styled.h2`
    font-weight: 600;
    font-size: 20px;
    line-height: 21px;

    margin-bottom : 7px;

    color: #000000;
`;

export const StaffCountText = styled.span`
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;

    margin-bottom : 10px;

    color: #000000;
`;

export const StaffItemWrapper = styled.div`
    display : flex;
    align-items: center;

    padding : 10px 0;

    border-bottom : 0.5px solid #BDBDBD;
`;

export const StaffItemCircle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #FFD29B;

    padding: 15px;
    border-radius: 100%;

    font-weight: 600;
    font-size: 16px;
    line-height: 15px;

    color: #FFFFFF;
`;

export const StaffInfoWrapper = styled.div`
    display : flex;
    flex-direction: column;

    padding-left:  10px;
`;

export const StaffNameText = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;

    margin-bottom : 4px;

    color: #000000;
`;

export const StaffRoleText = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 13px;

    color: #CFCFCF;
`;

