import { useState } from "react";
import { Navigate, useNavigate, useNavigationType } from "react-router-dom";
import { Nav } from "../../components/Nav";
import {
    Container,
    Content,
    Title,
    SubTitle,
    Register,
    BodyContent
} from "./styles";

export function RegisterStudent() {
    const [search, setSearch] = useState(true);
    const [ofert, setOfert] = useState(false);

    console.log(search, ofert);

    const navigate = useNavigate();

    function handleStudentOption(){
        navigate('/student-register')
    }

    function handleCompanyOption(){
        navigate('/company-register')
    }
    

    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <BodyContent>
                        <Title>
                            <h1>Cadastro</h1>
                        </Title>

                        <SubTitle>
                            <span>Você está:</span>
                            <input type='radio' onClick={handleStudentOption} onChange={event => setSearch(event.target.checked) } checked={search} /> <label>buscando oportunidade </label>
                            <input type='radio' onClick={handleCompanyOption} onChange={event => setOfert(event.target.checked) } checked={ofert} /> <label>ofertando oportunidade </label>
                        </SubTitle>

                        <Register>
                            <div id='one'>
                                <input 
                                    placeholder="nome completo"
                                />
                                <input 
                                    placeholder="melhor e-mail"
                                />
                                <input 
                                    placeholder="telefone"
                                />
                                <input 
                                    placeholder="linkedIn"
                                />
                            </div>

                            <div id='two'>

                                <select>
                                    <option>qual seu curso?</option>
                                    <option>Design Digital</option>
                                    <option>Sistemas da Informação</option>
                                </select>

                                <select>
                                    <option>qual semestre está cursando?</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>

                            <textarea
                                placeholder="descreva suas habilidades"
                            />
                            </div>

                            <div id='three'>
                                <input
                                placeholder="arraste uma foto"
                                />
                                <button>Finalizar cadastro</button>
                            </div>

                        </Register>
                    </BodyContent>
                </Content>
            </Container>
        </>

    );
}