import styled from "styled-components"

export const CafeHourWrapper = styled.div`
    display : flex;
    flex-direction: column;

    margin-bottom : 43px;
`;

export const CafeHourTitleText = styled.h2`
    font-weight: 600;
    font-size: 20px;
    line-height: 21px;

    margin-bottom : 11px;

    color: #000000;
`;

export const CafeHour = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;

    & > div:last-child > span {
        color : #FF3D3D;
    }

    padding: 10px 15px;

    border-radius : 5px;
    background-color: #ECECEC;
`;

export const WeekHourWrapper = styled.div`
    display : flex;
    flex-direction: column;

    justify-content: space-around;

    flex:1;

    & > span {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;

        color: #000000;    
    }

    & > p {
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;

        color: #000000;
    }
`;