import styled from "styled-components"

export const Positioner = styled.div`
    display : flex;
    flex-direction: column;

    padding : 15px;
`;

export const HeaderWrapper = styled.div`
    padding : 15px 10px;
`;

export const OrderBtnWrapper = styled.div`
    width: 100%fit-content;
    display : flex;
    padding : 15px 30px;

    justify-content: center;
    align-items: center;
`;

export const OrderBtn = styled.div`
    flex :1;
    padding : 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFCA89;

    border : none;
    border-radius: 5px;
    
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;
`;