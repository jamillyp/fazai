import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 100px 30px 100px;
    color: #fff;
`;

export const InfoLeft = styled.div`
    display: flex;
    align-items: center;
    span {
       margin-left: 30px; 
    }
`;

export const InfoRight = styled.div`
    span {
        margin-right: 30px;
    }
    button {
        width: 189px;
        height: 49px;
        color: #7557CA;
        background: #F0FC66;
        border-radius: 5px;
        border: none;
        font-weight: bold;
    }
`;