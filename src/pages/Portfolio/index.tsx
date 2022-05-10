import { CardStudent } from '../../components/CardStudent';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';
import { Container, Content } from './styles';

export function Portfolio() {
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <h1>Portfólio de estudantes</h1>
                    <div id='card'>
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                        <CardStudent />
                    </div>
                </Content>
            </Container>
            <Footer />
        </>
    );
}