import {
    Container,
    InfoLeft,
    InfoRight,
    MenuToggle,
} from './styles';

import logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

interface NavProps {
    buttonTitleOffer?: string;
    buttonTitleSign?: string;
    buttonTitleRegister?: string;
}
export function Nav({buttonTitleOffer, buttonTitleSign, buttonTitleRegister} : NavProps) {

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
                
                <span onClick={() => navigate('/register')}>{buttonTitleRegister}</span>
                <span onClick={() => navigate('/login')}>{buttonTitleSign}</span>

                
                {buttonTitleOffer === undefined ? <></> : 
                 <button onClick={() => navigate('/register-offer')}>{buttonTitleOffer}</button>
                }
               
            </InfoRight>

        </Container>
    );
}