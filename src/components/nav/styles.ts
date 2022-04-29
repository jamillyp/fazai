import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 50px 30px 50px;
    color: #fff;

    img {
        cursor: pointer;
    }

    @media (max-width: 1140px) {
        font-size : 14px;
    }
    @media (max-width: 900px) {
        span, button {
            display: none;
        }
    }
`;

export const InfoLeft = styled.div`
    display: flex;
    align-items: center;
    span {
       margin-left: 30px;
       cursor: pointer;
    }

    @media (max-width: 1050px) {
        span {
            margin-left: 15px;
        }
    }
`;

export const InfoRight = styled.div`
    span {
        margin-right: 30px;
        cursor: pointer;
    }

    @media (max-width: 1050px) {
        span {
            margin-right: 15px;
        }
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

export const MenuToggle = styled.div`
    display: none;
    margin-left: 70%;

    @media (max-width: 900px) {

        .one, .two, .three {

            background-color: #fff;
            height: 5px;
            width: 50px;
            margin: 6px auto;
            /* align-self: center;
            justify-self: right; */

        }
    }

    @media (max-width: 900px) {
        display: block;
    }
        
`;

