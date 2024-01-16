import React from 'react';
import { Row } from 'react-bootstrap';

interface chatDetails {
    query: string;
    result: string | undefined;
}

const ChartResults: React.FC<chatDetails> = ({ query, result }) => {
    return (
        <div>
            <Row>
                <div>
                    <p>Your Query: {query}</p>
                </div>
            </Row>
            <Row>
                <div>
                    <p>Result: {result}</p>
                </div>
            </Row>
        </div>
    );
};

export default ChartResults;