import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface textAreaInputProps {
    label: string;
    value: string;
    areaLabel: string;
    id: string;
    placeholder: string;
    rows: number;
    cols: number;
    onChange: (value: string) => void;
}

const TextAreaInput: React.FC<textAreaInputProps> =
    ({ label, value, id, areaLabel, placeholder, rows, cols, onChange }) => {
        return (
            <>
                <InputGroup>
                    <InputGroup.Text>{label} </InputGroup.Text>
                    <Form.Control
                        as='textarea'
                        id={id}
                        value={value}
                        aria-label={areaLabel}
                        placeholder={placeholder}
                        rows={rows}
                        cols={cols}
                        onChange={(e) => onChange(e.target.value)} />
                </InputGroup>
            </>
        )
    };

export default TextAreaInput;