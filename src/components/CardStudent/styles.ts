import styled from "styled-components";

export const Container = styled.div`
    width: 291px;
    height: 226px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 10px;
    
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div {
        display: flex; 
    }

    p {
        color: #5195D4;
        font-weight: 600;
        font-size: 14px;
    }
    span {
        color: #776D6D;
        /* font-weight: lighter; */
        font-size: small;
    }
    img {

    }
    button {
        width: 128px;
        height: 40px;
        background: rgba(59, 24, 158, 0.84);
        border-radius: 10px;
        border: none;
        color: #fff;
        margin: 5px;
    }

    #button-avatar {
        width: 85px;
        background: transparent;
        height: 85px;
        border: 3px solid rgba(59, 24, 158, 0.84);
        border-radius: 100%;
    }

    #buttonContrate {
        border: 1px solid rgba(59, 24, 158, 0.607143);
        background: transparent;
        color: rgba(59, 24, 158, 0.607143);
        font-weight: bold;
    }
`;