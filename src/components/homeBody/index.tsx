import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import empresa from '../../assets/images/home-empresa.svg';
import estudante from '../../assets/images/home-estudante.svg';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
    Container,
    SlideShow,
    RegisterButton,
    SearchButton,
    ContentSlide,
} from './styles';

import { useNavigate } from 'react-router-dom';

export function HomeBody() {
    const navigate = useNavigate();

    return (
        <Container>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SlideShow>
                        <ContentSlide>
                            <h3>Encontre a melhor<br /> 
                            oportunidade<br /> 
                            para se <br />
                            desenvolver!</h3>
                            <RegisterButton onClick={() => navigate('/register')}>
                                Cadastre-se
                            </RegisterButton>
                            <br />
                            <SearchButton>
                                Buscar serviços
                            </SearchButton>
                        </ContentSlide>
                        <ContentSlide>
                            <img src={estudante} alt='estudante' />
                        </ContentSlide>

                    </SlideShow>
                </SwiperSlide>

                <SwiperSlide>

                    <SlideShow>
                        <ContentSlide>
                            <h3>Encontre o melhor<br /> 
                            profissional<br /> 
                            para seus<br />
                            projetos!</h3>
                            <RegisterButton onClick={() => navigate('/register')}>
                                Cadastre-se
                            </RegisterButton>
                            <br />
                            <SearchButton onClick={() => navigate('/portfolio')}>
                                Buscar profissionais
                            </SearchButton>
                        </ContentSlide>
                        <ContentSlide>
                            <img src={empresa} alt='empresa' />
                        </ContentSlide>

                    </SlideShow>

                </SwiperSlide>
            </Swiper>
        </Container>
    );
}