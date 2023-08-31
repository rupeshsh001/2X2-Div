import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import './App.css';

function Layout({ width, height, data }) {
    const myref = useRef();
    const [maxX, setMaxX] = useState(width);
    const [maxY, setMaxY] = useState(height);

    const [initialState, setInitialState] = useState({
        x: maxX / 2,
        y: maxY / 2,
    });

    const plusStyle = {
        fontSize: '50px',
        fontWeight: 'bold',
        cursor: 'grab',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    useEffect(() => {
        if (myref?.current?.offsetLeft) setMaxX(myref?.current?.offsetLeft + width);
        if (myref?.current?.offsetTop) setMaxY(myref?.current?.offsetTop + height);
    }, []);

    return (
        <div style={{ position: 'relative', width: width, height: height }} ref={myref}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: initialState.x, height: initialState.y, backgroundColor: 'yellow', ...alignCenter }}>
                    {data.cell1}
                </div>
                <div
                    style={{
                        width: Math.abs(width - initialState.x),
                        height: initialState.y,
                        backgroundColor: 'pink',
                        ...alignCenter,
                    }}
                >
                    {data.cell2}
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        width: initialState.x,
                        height: Math.abs(height - initialState.y),
                        backgroundColor: 'red',
                        ...alignCenter,
                    }}
                >
                    {data.cell3}
                </div>
                <div
                    style={{
                        width: Math.abs(initialState.x - width),
                        height: Math.abs(initialState.y - height),
                        backgroundColor: 'blue',
                        ...alignCenter,
                    }}
                >
                    {data.cell4}
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%) ',
                    ...plusStyle,
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
                    <div>+</div>
                </Draggable>
            </div>
        </div>
    );
}

export default Layout;
