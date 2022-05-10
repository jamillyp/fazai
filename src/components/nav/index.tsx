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

                <span onClick={() => navigate('/portfolio')}>Portfólio de estudantes</span>
                <span >Empresas parceiras</span>
            </InfoLeft>

            <MenuToggle>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
            </MenuToggle>


            <InfoRight>
                <span onClick={() => navigate('/register')}>Cadastre-se</span>
                <span onClick={() => navigate('/login')}>Entrar</span>

                <button>Ofertar oportunidades</button>
            </InfoRight>

        </Container>
    );
}