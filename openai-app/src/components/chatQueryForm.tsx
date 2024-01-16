import React, { useState } from 'react';
import PrimaryButton from './button';
import TextAreaInput from './textArea';
import AzureOpenAIDetails, { OpenAI } from '../common/OpenAIHelper';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ChartResults from './chatResults';

//TODO: Remove once we have a proper solution to read the secrets from the Azure KeyVault
const openaiDetails: AzureOpenAIDetails = {
    endpoint: "https://cpmplusai.openai.azure.com/",
    azure_key: "9073dcb786b6481e92522feba69fc6b9",
    deployment: "GPT35TurboInstruct",
};

const ChatQueryForm: React.FC = () => {
    const [textAreaValue, setTextAreaValue] = useState<string>('');
    const [query, setQueryValue] = useState('');
    const [result, setResult] = useState<string>();
    const [placeholder, setPlaceholder] = useState<string>('Entry your query here...');

    const handleTextAreaChange = (textAreaValue: string) => {
        setTextAreaValue(textAreaValue);
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
    };

    const handleButtonClick = async () => {
        //e.preventDefault();
        var instance = OpenAI.getInstance(openaiDetails);
        var resultValue = await instance.sendMessage([textAreaValue]);
        setQueryValue(textAreaValue);
        console.log('Result after submit is : ', resultValue);
        setResult(resultValue.join(','));
        setTextAreaValue('');
        setPlaceholder('Entry your query here...');
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div>
                        <Form onSubmit={handleFormSubmit}>
                            <TextAreaInput label='Query'
                                value={textAreaValue}
                                areaLabel='InputQuery'
                                id='inputQuery'
                                placeholder={placeholder}
                                rows={10}
                                cols={50}
                                onChange={handleTextAreaChange} />
                            <br></br>
                            <PrimaryButton label="Submit" onClick={handleButtonClick} />
                        </Form>
                        <br></br>
                    </div>
                </Col>
                <Col>
                    <ChartResults query={query} result={result} />
                </Col>
            </Row>
        </Container>
    );
};

export default ChatQueryForm;