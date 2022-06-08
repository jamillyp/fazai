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
    height: 100%;
    margin-top: 20px;

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
   
    h2 {
        font-weight: 600;
        font-size: 20px;
        line-height: 29px;
        text-align: center;
        color: #D9EC05;
    }
`;
export const Pagination = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: 2%;
        border: none;
        background: #BDC722;
        color: #fff; 
        width: 150px;
        height: 50px;
        border-radius: 10px;
        font-weight: bold;

        &:hover {
            filter: brightness(0.9);
        }
    }

    #negocie {
        background: #492E95;
    }
`;

