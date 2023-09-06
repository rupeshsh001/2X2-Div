import React, { useState } from "react";
import Matrix from "./components/Matrix";

const App = () => {
    const [inputs, setInputs] = useState({
        input1: { isEditing: false, text: "PP" },
        input2: { isEditing: false, text: "PN" },
        input3: { isEditing: false, text: "NP" },
        input4: { isEditing: false, text: "NN" },
    });
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                width: "calc(100% - 100px)",
                height: "95vh",
                alignItems: "center",
                marginLeft: "100px",
                overflow: "hidden",
            }}
        >
            <Matrix width={400} height={450} inputs={inputs} setInputs={setInputs} />
        </div>
    );
};

export default App;
