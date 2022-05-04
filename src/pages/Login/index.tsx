import { FormEvent, useState } from 'react';
import { Footer } from '../../components/footer';
import { Nav } from '../../components/nav';

import { Container, LoginForm, Content } from './styles';

export function Login() {

    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmitLogin(event: FormEvent){
        event.preventDefault();

        console.log(email, senha);
        
        setSenha('');
        setEmail('');
    }

    return (
        <>
            <Nav />
            <Container>
                
                    <LoginForm onSubmit={handleSubmitLogin}>
                      
                            <h3>Login</h3>

                            <input 
                                placeholder='email'
                                type='email'
                                name='email'
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />

                            
                            <input 
                                placeholder='senha' 
                                type='password'
                                name='senha'
                                value={senha}
                                onChange={event => setSenha(event.target.value)} 
                            />

                            <p>Esqueceu sua senha?</p>

                            <button type="submit">Entrar</button>
                      
                    </LoginForm>
            </Container>
            <Footer />
        </>

    );
}