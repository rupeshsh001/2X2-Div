import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import "./App.css";

function Layout({ width, height, inputs, setInputs }) {
    const myref = useRef();
    const [maxX, setMaxX] = useState(width);
    const [maxY, setMaxY] = useState(height);

    const [initialState, setInitialState] = useState({
        x: maxX / 2,
        y: maxY / 2,
    });

    const plusStyle = {
        fontSize: "50px",
        fontWeight: "bold",
        cursor: "grab",
    };

    const handleDrag = (e) => {
        setInitialState({
            x:
                e.x - myref?.current?.offsetLeft > width
                    ? myref?.current?.offsetLeft + width
                    : Math.abs(e.x - myref?.current?.offsetLeft),
            y: e.y - myref?.current?.offsetTop > height ? height : Math.abs(e.y - myref?.current?.offsetTop),
        });
    };

    const alignCenter = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    useEffect(() => {
        if (myref?.current?.offsetLeft) setMaxX(myref?.current?.offsetLeft + width);
        if (myref?.current?.offsetTop) setMaxY(myref?.current?.offsetTop + height);
    }, []);

    const handleEditClick = (inputKey) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            [inputKey]: { ...prevInputs[inputKey], isEditing: true },
        }));
    };

    const handleBlur = (inputKey) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            [inputKey]: { ...prevInputs[inputKey], isEditing: false },
        }));
    };

    const handleChange = (e, inputKey) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            [inputKey]: { ...prevInputs[inputKey], text: e.target.value },
        }));
    };

    const box1Area = (((initialState.x * initialState.y) / (width * height)) * 100).toFixed(2);
    const box2Area = (((Math.abs(width - initialState.x) * initialState.y) / (width * height)) * 100).toFixed(2);
    const box3Area = (((initialState.x * Math.abs(initialState.y - height)) / (width * height)) * 100).toFixed(2);
    const box4Area = (
        ((Math.abs(initialState.x - width) * Math.abs(initialState.y - height)) / (width * height)) *
        100
    ).toFixed(2);

    return (
        <>
            <div>
                <div
                    style={{
                        width: width,
                        border: "1px solid black",
                        height: "50px",
                        display: "flex",
                        borderBottom: "none",
                        ...alignCenter,
                    }}
                >
                    Actual values
                </div>
                <div style={{ width: width, border: "1px solid black", height: "50px", display: "flex" }}>
                    <div
                        style={{
                            width: initialState.x,
                            ...alignCenter,
                            borderRight: "1px solid black",
                            backgroundColor: "#FEDA60",
                        }}
                    >
                        POSITIVE
                    </div>
                    <div style={{ flex: 1, ...alignCenter, backgroundColor: "#FEDA60" }}>NEGATIVE</div>
                </div>
                <div style={{ position: "relative", width: width, height: height }} ref={myref}>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                width: initialState.x,
                                height: initialState.y,
                                backgroundColor: "#00FF00",
                                ...alignCenter,
                            }}
                        >
                            {inputs.input1.isEditing ? (
                                <input
                                    type="text"
                                    value={inputs.input1.text}
                                    onChange={(e) => handleChange(e, "input1")}
                                    onBlur={() => handleBlur("input1")}
                                    autoFocus
                                />
                            ) : (
                                <span onClick={() => handleEditClick("input1")}>{inputs.input1.text}</span>
                            )}
                        </div>
                        <div
                            style={{
                                width: Math.abs(width - initialState.x),
                                height: initialState.y,
                                backgroundColor: "#0000FF",
                                ...alignCenter,
                            }}
                        >
                            {inputs.input2.isEditing ? (
                                <input
                                    type="text"
                                    value={inputs.input2.text}
                                    onChange={(e) => handleChange(e, "input2")}
                                    onBlur={() => handleBlur("input2")}
                                    autoFocus
                                />
                            ) : (
                                <span onClick={() => handleEditClick("input2")}>{inputs.input2.text}</span>
                            )}
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                width: initialState.x,
                                height: Math.abs(height - initialState.y),
                                backgroundColor: "#FF0000",
                                ...alignCenter,
                            }}
                        >
                            {inputs.input3.isEditing ? (
                                <input
                                    type="text"
                                    value={inputs.input3.text}
                                    onChange={(e) => handleChange(e, "input3")}
                                    onBlur={() => handleBlur("input3")}
                                    autoFocus
                                />
                            ) : (
                                <span onClick={() => handleEditClick("input3")}>{inputs.input3.text}</span>
                            )}
                        </div>
                        <div
                            style={{
                                width: Math.abs(initialState.x - width),
                                height: Math.abs(initialState.y - height),
                                backgroundColor: "#800000",
                                ...alignCenter,
                            }}
                        >
                            {inputs.input4.isEditing ? (
                                <input
                                    type="text"
                                    value={inputs.input4.text}
                                    onChange={(e) => handleChange(e, "input4")}
                                    onBlur={() => handleBlur("input4")}
                                    autoFocus
                                />
                            ) : (
                                <span onClick={() => handleEditClick("input4")}>{inputs.input4.text}</span>
                            )}
                        </div>
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <Draggable
                            onDrag={handleDrag}
                            bounds={{
                                top: -height / 2,
                                left: -width / 2,
                                right: width / 2,
                                bottom: height / 2,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "40px",
                                    height: "40px",
                                    ...plusStyle,
                                }}
                            >
                                +
                            </div>
                        </Draggable>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: `${height / 2 - 25}px`,
                            left: `-${height / 2 + 75}px`,
                            height: "50px",
                            transform: "rotate(-90deg)",
                            width: height,
                        }}
                    >
                        <div
                            style={{
                                width: height,
                                border: "1px solid black",
                                height: "100%",
                                borderBottom: "none",
                                ...alignCenter,
                            }}
                        >
                            PREDICTED VALUES
                        </div>
                        <div
                            style={{
                                display: "flex",
                                border: "1px solid black",
                                height: "50px",
                                backgroundColor: "#FEDA60",
                            }}
                        >
                            <div
                                style={{
                                    ...alignCenter,
                                    borderRight: "1px solid black",
                                    flex: 1,
                                    backgroundColor: "#FEDA60",
                                }}
                            >
                                NEGATIVE
                            </div>
                            <div style={{ width: initialState.y, ...alignCenter }}>POSITIVE</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    boxShadow: "-1px 5px 5px 5px rgba(0, 0, 0, 0.5)",
                    padding: "20px",
                    margin: "20px",
                    display: "inline-block",
                    width: "250px",
                }}
            >
                <h4 style={{ marginBottom: "10px" }}>Box details</h4>
                <p style={{ display: "flex", flexDirection: "column" }}>
                    <span>{inputs.input1.text}</span>
                    <span>
                        {/* height: {initialState.x} width: {initialState.y} */}
                        BOX SIZE:- {box1Area}%
                    </span>
                </p>
                <p style={{ display: "flex", flexDirection: "column" }}>
                    <span>{inputs.input2.text}</span>
                    <span>
                        {/* height: {Math.abs(width - initialState.x)} width: {initialState.y} */}
                        BOX SIZE:- {box2Area}%
                    </span>
                </p>
                <p style={{ display: "flex", flexDirection: "column" }}>
                    <span>{inputs.input3.text}</span>
                    <span>
                        {/* height: {initialState.x} width: {Math.abs(initialState.y - height)} */}
                        BOX SIZE:- {box3Area}%
                    </span>
                </p>
                <p style={{ display: "flex", flexDirection: "column" }}>
                    <span>{inputs.input4.text}</span>
                    <span>
                        {/* height: {Math.abs(initialState.x - width)} width: {Math.abs(initialState.y - height)} */}
                        BOX SIZE:- {box4Area}%
                    </span>
                </p>
            </div>
        </>
    );
}

export default Layout;
