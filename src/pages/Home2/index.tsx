// import { Footer } from "../../components/Footer";
import { HomeBody } from "../../components/HomeBody";
import { Nav } from "../../components/Nav";

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