// import { HomeBody } from "../../components/homeBody";
import { Footer } from "../../components/footer";
import { HomeBody } from "../../components/homeBody";
import { Nav } from "../../components/nav";

import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Nav />
            <HomeBody />
            <Footer />
        </Container>
    );
}