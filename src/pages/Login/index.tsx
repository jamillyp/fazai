import { Footer } from '../../components/footer';
import { Nav } from '../../components/nav';

import { Container, LoginForm, Content } from './styles';

export function Login() {
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <LoginForm>
                        <h3>Login</h3>

                        <input placeholder='email'></input>
                        <input placeholder='senha'></input>
                        <span>Esqueceu sua senha?</span>

                        <button>Entrar</button>

                    </LoginForm>
                </Content>
            </Container>
            <Footer />
        </>

    );
}