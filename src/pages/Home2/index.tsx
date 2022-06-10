// import { Footer } from "../../components/Footer";
import { HomeBody } from "../../components/HomeBody2";
import { Nav } from "../../components/Nav2";

import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Nav buttonTitleOffer="Ofertar oportunidades" buttonTitleSign="Entrar" buttonTitleRegister="Cadastre-se" />
            <HomeBody />
            {/* <Footer /> */}
        </Container>
    );
}