import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 100px 30px 100px;
    color: #fff;

    img {
        cursor: pointer;
    }
`;

export const InfoLeft = styled.div`
    display: flex;
    align-items: center;
    span {
       margin-left: 30px;
       cursor: pointer;
    }
`;

export const InfoRight = styled.div`
    span {
        margin-right: 30px;
        cursor: pointer;
    }
    button {
        width: 189px;
        height: 49px;
        color: #7557CA;
        background: #F0FC66;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        cursor: pointer;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;