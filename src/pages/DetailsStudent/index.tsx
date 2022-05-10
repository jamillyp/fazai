import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

import star from '../../assets/images/star.svg';
import avatar from '../../assets/images/avatar.svg';

import { Container, Content, WorkStudent, InfoStudent, ContentWork, StudentProfile } from './styles';

export function DetailsStudent() {
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <InfoStudent>
                        <StudentProfile>
                            <header>
                            <button id='button-avatar'>
                                <img src={avatar} alt='avatar-estudante' />
                            </button>

                            <p>Jamilly P.</p>
                            <span>Maranguape, Ceará</span>
                            <img src={star} alt='star' />
                        </header>

                        <div>
                            <button id='buttonContrate'>Contrate-me</button>
                        </div>
                        </StudentProfile>

                        

                        <p>Projetos:</p>
                        <p>Avaliações:</p>
                        <p>Sobre:</p>
                        <p>
                            Estudante de design digital na
                            Universidade Federal do Ceará,
                            Campus Quixadá.
                            Busco adquirir experiências práticas
                            antes da formação.
                        </p>
                        <p>Habilidades:</p>

                        <div>
                            <button id='habilidades'>React</button>
                            <button id='habilidades'>React-native</button>
                        </div>


                        <p>MEMBRO DESDE: 29 DE JANEIRO DE 2021</p>



                    </InfoStudent>

                    <WorkStudent>
                        <ContentWork>
                            <h4>Desenvolvimento de landing page para a Mob Telecom</h4>
                            <span>Feedback do cliente</span><br />
                            <img src={star} alt='star' />
                            <p>Entregou dentro do prazo, muito profissional.</p>
                        </ContentWork>
                    </WorkStudent>

                </Content>
            </Container>
            <Footer />
        </>
    );
}