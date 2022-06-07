import { 
    Container,
    Content
} from "./styles";

interface CardServicesProps {
    title: string;
    client: string;
    description: string;
}

export function CardServices({title, client, description}: CardServicesProps) {
    return (
        <Container>
            <Content>
                <h3>{title}</h3>

                <p><strong>Cliente:</strong> {client}</p>
                <p><strong>Descrição:</strong> {description}</p>

                <button>ver mais</button>
            </Content>
        </Container>
    );
}