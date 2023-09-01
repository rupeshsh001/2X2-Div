import React, { useState } from 'react';
import Layout from './Layout';

const App = () => {
    const divData = {
        cell1: 'cell 1',
        cell2: 'cell 2',
        cell3: 'cell 3',
        cell4: 'cell 4',
    };

    const [inputs, setInputs] = useState({
        input1: { isEditing: false, text: 'Cell 1' },
        input2: { isEditing: false, text: 'Cell 2' },
        input3: { isEditing: false, text: 'Cell 3' },
        input4: { isEditing: false, text: 'Cell 4' },
    });
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh', alignItems: 'center' }}>
            <Layout width={500} height={500} data={divData} inputs={inputs} setInputs={setInputs} />
        </div>
    );
};

export default App;
