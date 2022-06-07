import { useState } from 'react';
import { Nav } from '../../components/Nav';
import { BodyContent, Container, Content, Register, Title } from './styles';

import pdf from '../../assets/images/pdf.png';
import pdfBefore from '../../assets/images/pdf-before.png';

export function RegisterOffer() {

    const [imagePreview, setImagePreview] = useState("");
    const [pdfPreview, setPdfPreview] = useState("");
    const [fileError, setFileError] = useState("");

    function validateFile(file: File) {
        if (file) {

            if (file.type === "application/pdf") {
                setPdfPreview(file.name);
                setImagePreview("");
            } else {
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
            }
        } else {
            setFileError("Não foi possível carregar o arquivo");
            return;
        }
    }

    function clearImage() {
        setImagePreview("");
        setPdfPreview("");
    }
    return (
        <>
            <Nav />
            <Container>
                <Content>
                    <BodyContent>
                        <Title>
                            <h1>Cadastro de oportunidade</h1>
                        </Title>

                        <Register>
                            <div>
                                <div id='one'>
                                    <input placeholder='Título da oferta' />
                                    <input placeholder='Valor' />
                                </div>
                                <div id='two'>
                                    <textarea placeholder='breve descrição sobre a oferta...' />
                                </div></div>

                            <div id='three'>
                                {
                                    imagePreview || pdfPreview ? <div id="imageFile">
                                        <span onClick={clearImage}>x</span>
                                        <img src={imagePreview || pdf} />
                                    </div> :
                                        <label
                                            id='arquivo'
                                        >
                                            <img style={{width: '30px', height: '30px', marginTop: '20px'}} src={pdfBefore} />
                                            <input placeholder='solte um arquivo'
                                                type="file"
                                                id="arquivo"
                                                name="arquivo"
                                                accept=".pdf, .jpg, .jpeg, .png"
                                                onChange={(e) => {
                                                    if (e.target.files?.length) {
                                                        validateFile(e.target.files[0]);
                                                    }
                                                }}
                                            />
                                        </label>

                                }
                                <button>Cadastrar oferta</button>
                            </div>

                        </Register>

                    </BodyContent>
                </Content>
            </Container>
        </>
    );
}