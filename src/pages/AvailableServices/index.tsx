import { useEffect, useState } from 'react';
import { CardServices } from '../../components/CardServices';
import { Nav } from '../../components/Nav';
import { OfferProps } from '../RegisterOffer';

import {
    BodyContent,
    Container,
    Content,
    Title,
    ServicesCard
} from './styles';


export function AvailableServices() {

    // const [dados, setDados] = useState<OfferProps[]>([]);

    // const data = [
    //     {
    //         title: 'Teste título',
    //         client: 'Teste cliente',
    //         description: 'Tesde de descrição'
    //     }
    // ]


    // useEffect(() => {
    //     setDados(data);
    // }, [])

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

                        </ServicesCard>
                    </BodyContent>
                </Content>
            </Container>
        </>
    );
}