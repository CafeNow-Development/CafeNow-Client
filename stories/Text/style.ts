import styled from "styled-components"

import { prop } from 'styled-tools'

import type { TextProps } from "./Text"

type TextStyleProps = Omit<TextProps, "label">

export const TextStyle = styled.span<TextStyleProps>`
    font-family: ${props => props.isMain ? 'Cafe24 Ssurround' :'NanumBarunGothic'};
    font-weight: ${prop('weight', 'normal')};
    font-size: ${prop('size', 14)}px;

    color: ${prop('color', '#000')};
`;