import styled from "styled-components"

export const StoreContentWrapper = styled.div`
    display : flex;
    flex-direction: column;

    margin-bottom : 53px;
`;

export const StoreContentTitleText = styled.h2`
    font-weight: 600;
    font-size: 20px;
    line-height: 21px;

    margin-bottom : 11px;

    color: #000000;
`;


export const StoreContent = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    height: 70px;

    padding: 8px 10px;

    border-radius : 5px;
    background-color: #ECECEC;
`;

export const StoreContentText = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;

    color: #000000;  
`;