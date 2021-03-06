import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
`;
export const Content = styled.div`
    width: 1000px;
    height: 100%;
    background: rgba(194, 182, 226, 0.42);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        color: #fff;
        text-align: center;
        margin-top: 20px;
    }

    #card {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 30px;
    }

    @media(min-width: 1470px) {
        #card {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media(min-width: 1980px) {
        #card {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
    }
    
`;