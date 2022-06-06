import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/Nav";
import {
    Container,
    Content,
    Title,
    SubTitle,
    Register,
    BodyContent
} from "./styles";

export function RegisterCompany() {

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
                            <input type='radio' onClick={handleStudentOption} /> <label>buscando oportunidade </label>
                            <input type='radio' onClick={handleCompanyOption} checked /> <label>ofertando oportunidade </label>
                        </SubTitle>

                        <Register>
                            <div id='one'>
                                <input placeholder="nome completo" />
                                <input placeholder="melhor e-mail" />
                                <input placeholder="telefone" />
                                <input placeholder="segmentação" />
                            </div>

                            <div id='two'>
                                <textarea placeholder="breve descrição sobre sua empresa, isso vai para seu perfil aqui!" />
                            </div>

                            <div id='three'>
                                <input placeholder="arraste uma foto" />
                                <button>Finalizar cadastro</button>
                            </div>

                        </Register>
                    </BodyContent>
                </Content>
            </Container>
        </>

    );
}