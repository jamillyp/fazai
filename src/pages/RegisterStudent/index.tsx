import { useEffect, useState } from "react";
import { Navigate, useNavigate, useNavigationType } from "react-router-dom";
import { Nav } from "../../components/Nav2";
import {
    Container,
    Content,
    Title,
    SubTitle,
    Register,
    BodyContent
} from "./styles";

export function RegisterStudent() {
    const [search, setSearch] = useState(true);
    const [offer, setOffer] = useState(false);

    const [imagePreview, setImagePreview] = useState("");
    const [pdfPreview, setPdfPreview] = useState("");
    const [fileError, setFileError] = useState("");


    console.log(search, offer);

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

            setPdfPreview("");
        } else {
            setFileError("Não foi possível carregar o arquivo");
            return;
        }
    }

    function clearImage() {
        setImagePreview("");
    }
 
    useEffect(() => {
        console.log(imagePreview);
    }, [imagePreview])


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
                            <input type='radio' onClick={handleStudentOption} onChange={event => setSearch(event.target.checked)} checked={search} /> <label>buscando oportunidade </label>
                            <input type='radio' onClick={handleCompanyOption} onChange={event => setOffer(event.target.checked)} checked={offer} /> <label>ofertando oportunidade </label>
                        </SubTitle>

                        <Register>
                            <div id='one'>
                                <input
                                    placeholder="nome completo"
                                />
                                <input
                                    placeholder="melhor e-mail"
                                />
                                <input
                                    placeholder="telefone"
                                />
                                <input
                                    placeholder="linkedIn"
                                />
                            </div>

                            <div id='two'>

                                <select>
                                    <option>qual seu curso?</option>
                                    <option>Design Digital</option>
                                    <option>Sistemas da Informação</option>
                                </select>

                                <select>
                                    <option>qual semestre está cursando?</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>

                                <textarea
                                    placeholder="descreva suas habilidades"
                                />
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