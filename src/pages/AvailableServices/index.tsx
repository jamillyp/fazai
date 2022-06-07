import { useEffect, useState } from 'react';
import { CardServices } from '../../components/CardServices';
import { Nav } from '../../components/Nav';

import {
    BodyContent,
    Container,
    Content,
    Title,
    ServicesCard
} from './styles';

interface ServicesData {
    dados: [
        {
            title: string;
            client: string;
            description: string;
        }
    ]
}

export function AvailableServices() {
    const [data, setData] = useState<ServicesData[]>();


    useEffect(() => {
        // setData(dados);
    }, [])

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
                            <CardServices />

                        </ServicesCard>
                    </BodyContent>
                </Content>
            </Container>
        </>
    );
}