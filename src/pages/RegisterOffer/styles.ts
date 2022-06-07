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

export const Register = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
   
    #one {
        display: flex;
        flex-direction: row;
        

        input {
            margin-top: 20px;
            margin-left: 10px;
            background: transparent;
            width: 270px;
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
    }

    #two {
        display: flex;
        flex-direction: row;
        margin: 10px;

        textarea:focus {
        border: 2px solid #492E95;
        outline: none;
        }

        textarea {
            margin-top: 20px;
            background: transparent;
            width: 550px;
            height: 200px;
            border-radius: 8px;
            border: 1px solid #492E95;
            padding-top: 10px;
            padding-left: 10px;
            font-size: 12px;
        }
    }

    #three {
        display: flex;
        flex-direction: column;
        margin: 10px;
        align-items: center;
        justify-content: space-between;

        label {
            cursor: pointer;
            text-align: center;
            font-size: 12px;
            color: #776D6D;
            margin-top: 20px;
            border: none;
            width: 130px;
            height: 150px;
            left: 1027px;
            background: rgba(73, 46, 149, 0.28);
            border-radius: 5px;
            border: none;
            word-wrap: break-word;
            padding: 35px;
        }
        input[type="file"] {
            display: none;
        }

        #imageFile {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            background-color: #C2B6E2;
            border-radius: 10px;
            width: 130px;
            height: 150px;
            justify-content: space-evenly;
            align-items: center;
        }

        img {
            margin-bottom: 10px;
            width: 100px;
            height: 120px;
        }
        span {
            color: red;
            font-weight: bold;
            margin-left: 80%;
            cursor: pointer;

            &:hover {
            filter: brightness(0.9);
            }
        }

        button {
      
            width: 243px;
            height: 62px;
            background: #492E95;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            border: none;
            color: #fff;
            font-size: 16px;
            font-weight: bold;

            &:hover {
            filter: brightness(0.9);
            }
        }
    }
`;