import { useEffect, useState } from 'react';
import { CardServices } from '../../components/CardServices';
import { Nav } from '../../components/Nav';

import {
    BodyContent,
    Container,
    Content,
    Title,
    ServicesCard,
    Pagination
} from './styles';


export function AvailableServices() {

    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <BodyContent>
                        <Title>
                            <h1>Serviços disponíveis</h1>
                        </Title>

                        <ServicesCard>
                            <CardServices title="Título teste" description="Descrição breve do projeto" client="Cliente Teste" />

                            <Pagination>
                                <button>Voltar</button>
                                <button id='continue'>Continuar</button>
                            </Pagination>

                        </ServicesCard>
                    </BodyContent>
                </Content>
            </Container>
        </>
    );
}