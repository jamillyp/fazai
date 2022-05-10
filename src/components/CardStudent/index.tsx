import { Container } from './styles';

import avatar from '../../assets/images/avatar.svg';
import star from '../../assets/images/star.svg';
import { useNavigate } from 'react-router-dom';

export function CardStudent() {
    const navigate = useNavigate();

    return (
        <Container>
            <header>
                <button id='button-avatar'>
                    <img src={avatar} alt='avatar-estudante' />
                </button>
               
                <p>Jamilly P.</p>
                <span>Maranguape, Ceará</span>
                <img src={star} alt='star' />
            </header>
            
            <div>
                <button onClick={()=>navigate('/detalhes-estudante')}>Ver trabalhos</button>
                <button id='buttonContrate'>Contrate-me</button>
            </div>

        </Container>
    )
}