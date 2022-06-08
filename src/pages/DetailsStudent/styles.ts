import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
`;

export const Content = styled.div`
    width: 80%;
    height: 100%;
    /* padding: 20px; */
    background: rgba(194, 182, 226, 0.42);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const InfoStudent = styled.div`
    width: 290px;
    height: 608px;
    background: #FFFFFF;
    border-radius: 10px;
    color: #928CA2;
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items: center;

    padding: 10px;

    justify-content: space-evenly;
    
    p {
        font-size: small;
    }
`;

export const StudentAbout = styled.div`
    margin: 0px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    line-height: 23px;
`;

export const StudentTasks = styled.div`
    margin: 0px 10px 10px 10px;
    text-align: center;

    #habilidades {
        width: 110px;
        height: 28px;
        background: #8E66FF;
        border-radius: 10px;
        border: none;
        color: #D9EC05;
        margin: 1px;
        cursor: default;
        padding: 5px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
`;

export const WorkStudent = styled.div`
    width: 866px;
    height: 608px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: 20px 20px 20px 0px;
`;

export const ContentWork = styled.div`
    margin: 20px;
    width: 365px;
    height: 143px;
    background: rgba(217, 236, 5, 0.17);
    border-radius: 10px;
    padding: 10px;
    line-height: 25px;

    h4 {
        color: #492E95;
    }

    span {
        color: rgba(156, 169, 5, 0.8);
        font-weight: bold;
    }

    p {
        font-size: small;
    }

    img {
        width: 100px;
    }
   
`;

export const StudentProfile = styled.div`
    width: 290px;
    height: 226px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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