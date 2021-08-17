import styled from "styled-components"

export const TagWrapper = styled.div<{ backgroundColor?: string }>`
    display : inline-block;
    
    border: 1px solid #BFBFBF;
    box-sizing: border-box;
    border-radius: 15px;
    padding : 7px 20px;

    background-color: ${props => props.backgroundColor || '#ffffff'};
`;

export const TagText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    
    color: #000000;
`; 