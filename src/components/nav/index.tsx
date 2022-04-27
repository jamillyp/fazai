import { Container, InfoLeft, InfoRight } from './styles';

import logo from '../../assets/images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

export function Nav() {

    const navigate = useNavigate();
    return (
        <Container>
            <InfoLeft>
                <img src={logo} alt='fazai' onClick={() => navigate('/')} />
                <span>Portfólio de estudantes</span>
                <span>Empresas parceiras</span>
            </InfoLeft>

            <InfoRight>
                <span onClick={() => navigate('/register')}>Cadastre-se</span>
                <span onClick={() => navigate('/login')}>Entrar</span>

                <button>Ofertar oportunidades</button>
            </InfoRight>

        </Container>
    );
}