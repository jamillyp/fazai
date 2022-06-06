import { Nav } from '../../components/Nav';
import { BodyContent, Container, Content, Register, Title } from './styles';

export function RegisterOffer() {
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <BodyContent>
                        <Title>
                            <h1>Cadastro de oportunidade</h1>
                        </Title>

                        <Register>
                            <div>
                                <div id='one'>
                                    <input placeholder='Título da oferta' />
                                    <input placeholder='Valor' />
                                </div>
                                <div id='two'>
                                    <textarea placeholder='breve descrição sobre a oferta...' />
                                </div></div>

                            <div id='three'>
                                <input placeholder='solte um arquivo' />
                                <button>Cadastrar oferta</button>
                            </div>

                        </Register>

                    </BodyContent>
                </Content>
            </Container>
        </>
    );
}