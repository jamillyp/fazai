import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const FormRegister = styled.form`
    width: 312px;
    height: 447px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        margin-top: 30px;
        background: transparent;
        width: 250px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #492E95;
        padding-left: 10px;
        font-size: 12px;
    }

    input:focus {
        border: 2px solid #492E95;
        outline: none;
    }

    button {
        margin-top: 30px;
        background: #492E95;
        border: none;
        width: 153px;
        height: 52px;
        border-radius: 8px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;

        &:hover {
            filter: brightness(0.9);
        }
    }
    h3 {
        color: #492E95;
        font-size: 25px;
    }
    p {
        color: #D9EC05;
        font-size: 12px;
    }
`;