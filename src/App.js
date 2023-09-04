import React, { useState } from 'react';
import Layout from './Layout';

const App = () => {
    const [inputs, setInputs] = useState({
        input1: { isEditing: false, text: 'PP' },
        input2: { isEditing: false, text: 'PN' },
        input3: { isEditing: false, text: 'NP' },
        input4: { isEditing: false, text: 'NN' },
    });
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                marginLeft: '100px',
            }}
        >
            <Layout width={500} height={500} inputs={inputs} setInputs={setInputs} />
        </div>
    );
};

export default App;
