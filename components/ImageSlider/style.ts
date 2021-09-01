import styled from "styled-components";

export const ImageSliderWrapper = styled.div<{imageItem: string}>`
    width : 100%fit-content;
    height : 30vh;

    background: url(${props => props.imageItem});

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SliderBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    background-color: rgba(1,1,1,0.3);

    padding: 10px 15px;

    font-size: 15px;
`;