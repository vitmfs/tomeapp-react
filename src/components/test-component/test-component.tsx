import * as React from 'react';
import Button from '@mui/material/Button';

const str = "_blank";

const myStyle = {  
    color: "Green",  
    backgroundColor: "lightBlue",  
};  


const TestComp: React.FC = () => (
    <div style={myStyle}>

        <p>Something</p>
        <p>Something</p>
        <p>Something</p>
    </div>
);

export default TestComp;


// https://dev.to/wpreble1/typescript-with-react-functional-components-4c69