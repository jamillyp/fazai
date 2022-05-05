import { FormEvent, useState } from 'react';
import { Footer } from '../../components/footer';
import { Nav } from '../../components/nav';
import { Container, FormRegister } from './styles';

export function Register() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

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
                    <h3>Cadastre-se<br />no Faz Aí</h3>

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
            
                    <button type="submit">Cadastrar</button>
                </FormRegister>
            </Container>
            <Footer />
        </>
    );
}