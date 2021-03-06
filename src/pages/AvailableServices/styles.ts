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
    height: 450px;
    margin: 20px;
   
`;

export const BodyContent = styled.div`
 margin: 30px 30px 30px 70px;
`;

export const Title = styled.div`
    color:#492E95;
    
    h1 {
        text-align: center;
    }
`;

export const ServicesCard = styled.div`
    
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: 5% 10px 0 10px;
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

    #continue {
        background: #492E95;
    }
`;

