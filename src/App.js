import React, { useState } from 'react';
import Layout from './Layout';

const App = () => {
    const [inputs, setInputs] = useState({
        input1: { isEditing: false, text: 'Cell 1' },
        input2: { isEditing: false, text: 'Cell 2' },
        input3: { isEditing: false, text: 'Cell 3' },
        input4: { isEditing: false, text: 'Cell 4' },
    });
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh', alignItems: 'center' }}>
            <Layout width={500} height={500} inputs={inputs} setInputs={setInputs} />
        </div>
    );
};

export default App;
