import styled from "styled-components"

export const MenuListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuItemWrapper = styled.div`
    display : flex;
    justify-content: space-between;;

    padding : 22px;

    border-bottom : 0.5px solid #C0C0C0;
`;

export const MenuItemInfoWrapper = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
`;

export const MenuNameText = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #000000;
`;

export const MenuPriceText = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #FF8C00;
`;

export const MenuImageWrapper = styled.div`
    border-radius: 5px;
`;
