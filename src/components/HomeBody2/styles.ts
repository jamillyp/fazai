import styled from "styled-components";

export const Container = styled.div`
    
`;
export const SlideShow = styled.div`
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 2%;
`;

export const ContentSlide = styled.div`
    h3 {
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #F0FC66;
    }
  
`;

export const RegisterButton = styled.button`
    width: 204px;
    height: 65px;
    background: rgba(105, 117, 190, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
`;

export const SearchButton = styled.button`
    border: none;
    width: 204px;
    height: 65px;
    background: rgba(217, 236, 5, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: #fff;
    font-size: 18px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
`;