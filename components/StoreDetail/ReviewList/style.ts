import styled from "styled-components";

export const ReviewListWrapper = styled.div`
    display : flex;
    flex-direction: column;
`;

export const ReviewListTitleWrapper = styled.div`
    display : flex;
    justify-content: space-between;

    align-items: center;
`;

export const ReviewListTitleText = styled.h2`
    font-weight: 600;
    font-size: 20px;
    line-height: 21px;

    color: #000000;
`;

export const ReviewArgText = styled.span`
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 10px;

    color: #FF8C00;
`;

export const ReviewItemWrapper = styled.div`
    display : flex;
    flex-direction: column;

    padding: 12px 0;

    border-bottom : 0.5px solid #BDBDBD;
`;

export const StarWrapper = styled.div`
    display : flex;
    align-items: center;
    & > * {
        margin-right : 5px;
    }
    margin-bottom : 4px;
`;

export const ReviewText = styled.span`
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #000000;
`;