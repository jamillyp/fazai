// import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav2";

import star from '../../assets/images/star.svg';
import avatar from '../../assets/images/avatar.svg';

import { Container, Content, WorkStudent, InfoStudent, ContentWork, StudentProfile, StudentAbout, StudentTasks } from './styles';

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

                        <StudentAbout>
                            <p>Projetos: <strong>1</strong></p> 
                            <p>Avaliações: <strong>1</strong></p>
                            <p>Sobre:</p>
                            <p>
                                Estudante de design digital na
                                Universidade Federal do Ceará,
                                Campus Quixadá.
                                Busco adquirir experiências práticas
                                antes da formação.
                            </p>
                        </StudentAbout>

                        <StudentTasks>
                            <div>
                                <p>Habilidades:</p>
                            </div>
                            
                            <button id='habilidades'>React</button>
                            <button id='habilidades'>React-native</button>
                            <button id='habilidades'>NodeJS</button>
                            <button id='habilidades'>Styled-Components</button>
                        </StudentTasks>


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
            {/* <Footer /> */}
        </>
    );
}