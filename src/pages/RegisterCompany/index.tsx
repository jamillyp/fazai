import {
    Container,
    Content,
    Title,
    SubTitle,
    Register
} from "./styles";

export function RegisterCompany() {
    return (
        <Container>
            <Content>
                <Title>
                    <h1>Cadastro</h1>
                </Title>

                <SubTitle>
                    Você está:
                    <input type='radio' /> <label>buscando oportunidade </label>
                    <input type='radio' /> <label>ofertando oportunidade </label>
                </SubTitle>

                <Register>
                    <div id='one'>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>

                    <div id='two'>
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>

                    <div id='two'>
                        <input></input>
                        <button>Finalizar cadastro</button>
                    </div>

                </Register>

            </Content>
        </Container>
    );
}