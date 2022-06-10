import fazAi from '../../assets/images/faz-ai-footer.svg';

import { Container, Content } from './styles';

export function Footer() {
    return (
        <Container>

            <Content>
                <img src={fazAi} alt='fazai' />
            </Content>

            <Content>
                <h4>Ligando oportunidades</h4>  
                <p>Ajudando estudantes e empresas a se conectarem</p>
            </Content>

            <Content>
                <span><strong>@</strong>fazai</span>
            </Content>

        </Container>
    );
}