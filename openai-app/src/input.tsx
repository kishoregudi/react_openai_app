import { useState } from 'react';
import { OpenAI } from './common/OpenAIHelper';
import AzureOpenAIDetails from "./common/OpenAIHelper";
import './App.css';

const openaiDetails: AzureOpenAIDetails = {
    endpoint: "https://cpmplusai.openai.azure.com/",
    azure_key: "9073dcb786b6481e92522feba69fc6b9",
    deployment: "GPT35TurboInstruct",
};

function InputBox() {
    // State to manage the value of the input
    const [inputValue, setInputValue] = useState('');
    const [query, setQueryValue] = useState('');
    const [result, setResult] = useState<string>();
    const [placeholder, setPlaceholder] = useState<string>('Entry your query here...');


    // Event handler to update the state on input change
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    // Event handler for form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // Do something with the input value, for example, log it
        var instance = OpenAI.getInstance(openaiDetails);
        var resultValue = await instance.sendMessage([inputValue]);
        setQueryValue(inputValue);
        console.log('Result after submit is : ', resultValue);
        setResult(resultValue.join(','));
        setInputValue('');
        setPlaceholder('Entry your query here...');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Input box with onChange event handler */}
                <textarea id='inputTextArea'
                    className='card'
                    rows={10}
                    cols={50}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                />
                {/* Display the current value */}
                <p>Your Query: {query}</p>
                <button type='submit' className=''>Submit</button>
                <p>Result Value: {result}</p>
            </form>
        </div>
    );
}

export default InputBox;