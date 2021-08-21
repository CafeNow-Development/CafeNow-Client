import styled from "styled-components"


export const StoreTitleWrapper = styled.div`
    display : flex;
    flex-direction: column;

    margin-bottom : 23px;
    border-bottom : 0.5px solid #C1C1C1;
`;

export const StoreTitleText = styled.h2`
    font-weight: 600;
    font-size: 22px;
    line-height: 21px;


    color: #000000;
`;

const StatusCircleTheme = {
    open: '#98BAE2',
    close: '#A1A1A1',
    setting : "#FEBB6C"
}

export const CafeStatusWrapper = styled.div`
    display: flex;

    margin-top : 25px;
    margin-bottom : 11px;
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
    font-size: 14px;
    line-height: 10px;

    margin-right: 5px;
    color: #000000;
`;

export const ImageWrapper = styled.div`
    margin-bottom : 28px;
`;