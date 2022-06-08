import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    
    return (
        <Container>
            <Content>
                <h3>{title}</h3>

                <p><strong>Cliente:</strong> {client}</p>
                <p><strong>Descrição:</strong> {description}</p>

                <button onClick={() => navigate('/services-expand')}>ver mais</button>
            </Content>
        </Container>
    );
}