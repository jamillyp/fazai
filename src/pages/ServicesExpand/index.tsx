import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/Nav";

import {
    Container,
    Content,
    Title,
    BodyContent,
    Pagination,
} from './styles';

interface ServicesExpandProps {
    title: string;
    description: string;
    ability: string;
    price: string;
    archive: string;
}

export function ServicesExpand() {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <Title>
                        <h2>Desenvolvimento de um web site</h2>
                    </Title>

                    <BodyContent>
                        <p><strong>Cliente: </strong> Empresa 1</p>
                        <p><strong>Bio da empresa: </strong> Somos a empresa número 1.</p>
                        <p><strong>Descrição da oportunidade: </strong> Desenvolvimento de um site, responsivo de acordo com o layout disponibilizado no figma.</p>
                        <p><strong>Habilidades desejadas: </strong>HTML, CSS, JS</p>
                        <p><strong>Preço à ser pago ao profissional: </strong>R$ 3.000,00</p>
                        <p><strong>Baixar Arquivos: </strong>link_do_arquivo.pdf</p>

                        
                    </BodyContent>
                    <Pagination>
                        <button onClick={() => navigate('/services')}>Voltar</button>
                        <button id='negocie' onClick={() => navigate('/negotiation')}>Negociar</button>
                    </Pagination>
                </Content>
            </Container>
        </>

    );
}