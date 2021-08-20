import styled from "styled-components"


export const TagListWrapper = styled.div`
    display : inline-block;

`;

export const TagListTitleWrapper = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;

    color: #000000;

`;

export const TagList = styled.div`
    display: inline-table;
    margin-top: 12px;
`;

export const TagItem = styled.div`
    width: fit-content;
    display: inline-table;

    cursor: pointer;

    padding : 7px 20px;
    margin : 4px 6px;

    border : 1px solid #BFBFBF;
    box-sizing: border-box;
    border-radius: 15px;
`;