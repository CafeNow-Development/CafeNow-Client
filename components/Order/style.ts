import styled from "styled-components";


export const Positioner = styled.div`
    display : flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    position: relative;
    top : -40px;
`;

export const OrderCafeInfoWrapper = styled.div`
    margin: 0px 50px;

    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    background-color: #fff;
    padding: 25px 0;
    min-width : 80%fit-content;
`;

export const CafeNameText = styled.h2`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
`;

export const StarWrapper = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
`;

export const StarText = styled.span`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    color: #FFD29B;
`;

export const NavWrapper = styled.div<{nav : string}>`
    display : flex;
    justify-content: center;
    align-items: center;

    border-bottom : 0.5px solid #C0C0C0;

    & > div:nth-child(${props => props.nav === "menu" ? 1 : 2}) {
        font-weight: 600;
        font-size: 16px;

        color: #000000;
    }

`;

export const NavItemWrapper = styled.div`
    flex: 1;

    width: 100%fit-content;

    padding: 20px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0.25px solid #c0c0c0;
    border-top: none;

    font-weight: normal;
    font-size: 16px;

    color: #A4A3A3;
`;