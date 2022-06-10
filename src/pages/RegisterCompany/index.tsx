import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../components/Nav";
import {
    Container,
    Content,
    Title,
    SubTitle,
    Register,
    BodyContent
} from "./styles";

export function RegisterCompany() {

    const [imagePreview, setImagePreview] = useState("");
    const [fileError, setFileError] = useState("");

    const navigate = useNavigate();

    function handleStudentOption() {
        navigate('/student-register')
    }

    function handleCompanyOption() {
        navigate('/company-register')
    }

    function validateFile(file: File) {
        if (file) {

            const reader = new FileReader();

            reader.addEventListener(
                "load",
                function () {
                    setImagePreview(String(reader.result));
                },
                false
            );

            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setFileError("Não foi possível carregar o arquivo");
            return;
        }
    }

    function clearImage() {
        setImagePreview("");
    }

    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <BodyContent>
                        <Title>
                            <h1>Cadastro</h1>
                        </Title>

                        <SubTitle>
                            <span>Você está:</span>
                            <input type='radio' onClick={handleStudentOption} /> <label>buscando oportunidade </label>
                            <input type='radio' onClick={handleCompanyOption} checked /> <label>ofertando oportunidade </label>
                        </SubTitle>

                        <Register>
                            <div id='one'>
                                <input placeholder="nome completo" />
                                <input placeholder="melhor e-mail" />
                                <input placeholder="telefone" />
                                <input placeholder="segmentação" />
                            </div>

                            <div id='two'>
                                <textarea placeholder="breve descrição sobre sua empresa, isso vai para seu perfil aqui!" />
                            </div>

                            <div id='three'>
                                {
                                    imagePreview ? <div id="imageFile">
                                        <span onClick={clearImage}>x</span>
                                        <img src={imagePreview} />
                                    </div> :
                                        <label
                                            htmlFor="enviar-arquivo"
                                        > Adicione uma imagem
                                            <input
                                                type="file"
                                                name="enviar-arquivo"
                                                accept=".jpg, .jpeg, .png"
                                                id="enviar-arquivo"
                                                onChange={(e) => {
                                                    if (e.target.files?.length) {
                                                        validateFile(e.target.files[0]);
                                                    }
                                                }}
                                            />
                                        </label>
                                }
                                <button>Finalizar cadastro</button>
                            </div>

                        </Register>
                    </BodyContent>
                </Content>
            </Container>
        </>

    );
}