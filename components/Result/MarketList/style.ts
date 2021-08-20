import styled from "styled-components"

export const MarketListWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 30px;
`;

export const MarketListTitleWrapper = styled.div`
    display : flex;
    justify-content: space-between;

    padding : 9px 0;

    border-bottom : 0.5px solid #D2D2D2;
`;

export const MarketListTitleText = styled.span`
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #000000;
`;

export const MarketListResultCountText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 10px;

    color: #9F9F9F;
`;

export const MarketItemWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding : 18px 0;

    border-bottom: 0.5px solid #D2D2D2;
`;

export const CafeNameText = styled.h2`
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;

    color: #000000;

`;

const StatusCircleTheme = {
    open: '#98BAE2',
    close: '#A1A1A1',
    setting : "#FEBB6C"
}

export const CafeStatusWrapper = styled.div`
    display: flex;

    margin-top : 8px;
`;

enum Business {
  open = "open",
  close = "close",
  setting = "setting",
}

export const StatusCircle = styled.div<{isBusiness : Business}>`
    width: 11px;
    height: 11px;
    border-radius: 100%;
    margin-right: 5px;
    background: ${props => StatusCircleTheme[props.isBusiness]};
`;

export const StatusText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 10px;

    margin-right: 5px;
    color: #000000;
`;

export const CafeHourText = styled.span`
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 10px;

    color: #000000;
`;

export const CafeReviewWrapper = styled.div`
    display : flex;
    flex-direction: column;

    margin-top : 20px;

    padding : 14px;

    background-color: #EFEEEE;
    border-radius : 5px;

    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 10px;

    color: #707070;
`;