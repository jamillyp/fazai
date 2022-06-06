import {
    Container,
    InfoLeft,
    InfoRight,
    MenuToggle,
} from './styles';

import logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

export function Nav() {

    const navigate = useNavigate();
    return (
        <Container>

            <InfoLeft>
                <img src={logo} alt='fazai' onClick={() => navigate('/')} />

                <button onClick={() => navigate('/portfolio')}>Portfólio de estudantes</button>
                <button>Empresas parceiras</button>
            </InfoLeft>

            <MenuToggle>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
            </MenuToggle>


            <InfoRight>
                <span onClick={() => navigate('/register')}>Cadastre-se</span>
                <span onClick={() => navigate('/login')}>Entrar</span>

                <button onClick={() => navigate('/register-offer')}>Ofertar oportunidades</button>
            </InfoRight>

        </Container>
    );
}