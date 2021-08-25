import styled from "styled-components"

export const ReviewWrapper = styled.div`
    display : flex;

    flex-direction: column;
`;

export const ReviewInfoWrapper = styled.div`
    display : flex;
    align-items: center;

    padding: 8px 35px;
    margin : 8px 7px;

    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`;

export const ReviewAvgWrapper = styled.div`
    width : 30%;
    display : flex;
    flex-direction: column;
`;

export const ReviewAvgText = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    line-height: 25px;

    color: #000000;
`;

export const StarWrapper = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
`;

export const ReviewGraphWrapper = styled.div`
    width : 70%;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    padding : 0 25px;
`;

export const ReviewGraphItemWrapper = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin : 2px 0;

    text-align: center;
`;

export const ReviewGraphItemTitleText = styled.span`
    font-weight: 600;
    font-size: 8px;
    line-height: 9px;

    color: #000000;
`;

export const ReviewGraphItemBar = styled.div`
    width: 170px;
    padding : 2px 0;
    background: #C4C4C4;
    border-radius: 10px;
`;

export const ReviewListWrapper = styled.div`
    display : flex;
    flex-direction: column;

    padding: 0px 24px; 
`;

export const ReviewGraphItemCountText = styled.span`
    width : 5%;
    font-weight: normal;
    font-size: 11px;
    line-height: 10px;

    color: #B1B1B1;
`;

export const ReviewItemWrapper = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;