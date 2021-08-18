import styled from "styled-components"
import { prop } from "styled-tools";

import type { CafeStatusProps } from "./CafeStatus"

const StatusCircleTheme = {
    open: '#98BAE2',
    close: '#A1A1A1',
    setting : "#FEBB6C"
}

export const CafeStatusWrapper = styled.div`
    display: flex;
`;

export const StatusCircle = styled.div<CafeStatusProps>`
    width: 11px;
    height: 11px;
    border-radius: 100%;
    margin-right: 5px;
    background: ${props => StatusCircleTheme[props.status]};
`;

export const StatusText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 10px;

    color: #000000;
`;