import styled from "styled-components";


export const SearchBarWrapper = styled.div`
    display : flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin-bottom : 24px;

    border-radius : 8px;
    background-color: #F4F4F3;
`;

export const SearchBar = styled.input`
    width: 85%;
    padding : 11px;

    background: rgba(0,0,0,0);
    border : none;

    &::placeholder {
        color : #9E9E9E;
        font-size: 14px;
    }
`;