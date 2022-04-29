import styled from "styled-components";

export const Container = styled.div`
    height: 170px;
    left: 0px;
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    /* top: 847px; */
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const Content = styled.div`
    color: #321583;
    text-align: center;

    span, p {
        font-weight: 400;
        font-size: 14px;
    }
`;