import { FormEvent, useState } from 'react';
import { Footer } from '../../components/footer';
import { Nav } from '../../components/nav';

import { Container, LoginForm, Content } from './styles';

export function Login() {

    const [dataLogin, setDataLogin] = useState('');

    function handleSubmitLogin(event: FormEvent){
        event.preventDefault();
    }

    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <LoginForm onSubmit={handleSubmitLogin}>
                      
                            <h3>Login</h3>

                            <input 
                                placeholder='email'
                                type='email'
                                onChange={event => setDataLogin(event.target.value)}
                            />

                            
                            <input 
                                placeholder='senha' 
                                type='password'
                                onChange={event => setDataLogin(event.target.value)} 
                            />

                            <p>Esqueceu sua senha?</p>

                            <button type="submit" >Entrar</button>
                      
                    </LoginForm>
                </Content>
            </Container>
            <Footer />
        </>

    );
}