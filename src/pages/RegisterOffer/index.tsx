import { FormEvent, useState } from 'react';
import { Nav } from '../../components/Nav';
import { BodyContent, Container, Content, Register, Title } from './styles';

import pdf from '../../assets/images/pdf.png';
import pdfBefore from '../../assets/images/pdf-before.png';

export interface OfferProps {
    title: string;
    price: string;
    description: string;
    ability: string;
    image: string;
    pdf: string;
}

export function RegisterOffer() {

    const [imagePreview, setImagePreview] = useState("");
    const [pdfPreview, setPdfPreview] = useState("");
    const [fileError, setFileError] = useState("");

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [ability, setAbility] = useState("");

    const [offerData, setOfferData] = useState<OfferProps[]>([]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = [{
            title: title,
            price: price,
            description: description,
            ability: ability,
            image: imagePreview,
            pdf: pdfPreview
        }]                    

        setOfferData(data);

        console.log("estado: ",{offerData});


        console.log("dados: ", data);

        setTitle("");
        setPrice("");
        setDescription("");
        setImagePreview("");
        setPdfPreview("");
    }

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

                        <Register onSubmit={handleSubmit}>
                            <div>
                                <div id='one'>
                                    <input
                                        placeholder='Título da oferta'
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                    <input
                                        placeholder='Valor'
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                    />
                                </div>
                                <div id='two'>
                                    <input 
                                        placeholder='habilidades desejadas do profissional'
                                        value={ability}
                                        onChange={e => setAbility(e.target.value)}
                                    />
                                    <textarea
                                        placeholder='breve descrição sobre a oferta...'
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                    />
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
                                            <img style={{ width: '30px', height: '30px', marginTop: '20px' }} src={pdfBefore} />
                                            <input
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
                                <button type='submit' onClick={handleSubmit} >Cadastrar oferta</button>
                            </div>

                        </Register>

                    </BodyContent>
                </Content>
            </Container>
        </>
    );
}