import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PrimaryButton from './button';
import TextAreaInput from './textArea';
import AzureOpenAIDetails, { OpenAI } from '../common/OpenAIHelper';

//TODO: Remove once we have a proper solution to read the secrets from the Azure KeyVault
const openaiDetails: AzureOpenAIDetails = {
    endpoint: "https://cpmplusai.openai.azure.com/",
    azure_key: "9073dcb786b6481e92522feba69fc6b9",
    deployment: "GPT35TurboInstruct",
};

interface chatQueryFormProps {
    onSubmit: (formData: { textAreaValue: string }) => void;
}

const ChatQueryForm: React.FC<chatQueryFormProps> = ({ onSubmit }) => {
    const [textAreaValue, setTextAreaValue] = useState<string>('');
    const [query, setQueryValue] = useState('');
    const [result, setResult] = useState<string>();
    const [placeholder, setPlaceholder] = useState<string>('Entry your query here...');

    const handleTextAreaChange = (textAreaValue: string) => {
        setTextAreaValue(textAreaValue);
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        onSubmit({ textAreaValue });
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
        onSubmit({ textAreaValue });
    };

    return (
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
            <p>Your Query: {query}</p>
            <br></br>
            <p>Result: {result}</p>
        </div>
    );
};

export default ChatQueryForm;