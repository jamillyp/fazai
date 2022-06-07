import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    width: 269px;
    height: 225px;
   
`;
export const Content = styled.div`
    font-size: 12px;
    line-height: 25px;
    background-color: #F9FCD5;
    box-sizing: border-box;
    padding: 15px;

    h3 {
        text-align: center;
        line-height: 15px;
        margin-bottom: 10px;
        color: #492E95;
    }
    strong {
        color: #492E95;
    }
    p {
        color: #776D6D;
    }
    button {
        width: 93px;
        height: 26px;
        background: #D9EC05;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        color: #492E95;
        text-align: center;
        margin-left: 25%;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;