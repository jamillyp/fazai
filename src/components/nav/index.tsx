import { Container, InfoLeft, InfoRight } from './styles';

import logo from '../../assets/images/logo.svg';

export function Nav() {
    return (
        <Container>
            <InfoLeft><img src={logo} alt='fazai' />
                <span>Portfólio de estudantes</span>
                <span>Empresas parceiras</span>
            </InfoLeft>


            <InfoRight>
                <span>Cadastre-se</span>
                <span>Entrar</span>
                <button>Ofertar oportunidades</button>
            </InfoRight>

        </Container>
    );
}