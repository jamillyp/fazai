import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    background-color: #fff;
    border: none;
    border-radius: 10px;
    width: 1000px;
    height: 400px; //100%
    margin-top: 20px;

    background: rgba(194, 182, 226, 0.42);

    padding: 20px;
`;

export const BodyContent = styled.div`
    margin: 30px 40px 30px 70px;

    strong {
        color: #492E95;
        font-size: 15px;
    }
    p {
        line-height: 35px;
        font-size: small;
        color: #776D6D;
    }
`;

export const Title = styled.div`
    margin-top: 2%;
   
    h1 {
        font-weight: bold;
        line-height: 29px;
        text-align: center;
        color: #fff;
    }
`;