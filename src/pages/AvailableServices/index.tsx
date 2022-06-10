import { useEffect, useState } from 'react';
import { CardServices } from '../../components/CardServices';
import { Nav } from '../../components/Nav2';
import { OfferProps } from '../RegisterOffer';

import {
    BodyContent,
    Container,
    Content,
    Title,
    ServicesCard,
    Pagination,
} from './styles';

export function AvailableServices() {

    const [data, setData] = useState<OfferProps[]>([]);

    function loadData() {
        setData([
            {
                title: "Título",
                price: "10.000,00",
                description: "Desenvolvimento de um web site.",
                ability: "React, TypeScript",
                image: "",
                pdf: ""
            },
            {
                title: "Título 2",
                price: "13.000,00",
                description: "Desenvolvimento de um app.",
                ability: "React-Native, TypeScript",
                image: "",
                pdf: ""
            },
        ]);

        console.log(data);
        
    }

    useEffect(() => {
        loadData();
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
                           
                            <CardServices title="Título" description="Descrição breve do projeto" client="Cliente Teste" />
                        </ServicesCard>

                        <Pagination>
                            <button>Voltar</button>
                            <button id='continue'>Continuar</button>
                        </Pagination>


                    </BodyContent>
                </Content>
            </Container>
        </>
    );
}