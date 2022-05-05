import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';

import { Container, FormRegister } from './styles';

export function Register() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    function handleSubmitRegister(event: FormEvent) {
        event.preventDefault();

        console.log(nome, email, senha);

        setNome('');
        setSenha('');
        setEmail('');
    }
    return (
        <>
            <Nav />
            <Container>
                <FormRegister onSubmit={handleSubmitRegister}>
                    <h3>Cadastre-se</h3>
                    <h3>no Faz Aí</h3>

                    <input
                        placeholder='nome'
                        type='text'
                        name='nome'
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                    />

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
            
                    <button type="submit" onClick={()=>navigate('/student-register')}>Cadastrar</button>
                </FormRegister>
            </Container>
            <Footer />
        </>
    );
}