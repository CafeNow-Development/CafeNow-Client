import styled from "styled-components"

export const ReviewListWrapper = styled.div`
    display : flex;

    flex-direction: column;
`;

export const ReviewInfoWrapper = styled.div`
    display : flex;
    align-items: center;

    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`;

export const ReviewAvgWrapper = styled.div`
    display : flex;
    flex-direction: column;
`;

export const ReviewAvgText = styled.div`
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;

    color: #000000;
`;

export const StarWrapper = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
`;