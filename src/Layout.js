import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './App.css';

function Layout() {
    const maxX = 500;
    const maxY = 500;
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
            x: e.x > 500 ? 500 : e.x,
            y: e.y > 500 ? 500 : e.y,
        });
    };

    const alignCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={{ position: 'relative', width: '500px', height: '500px' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: initialState.x, height: initialState.y, backgroundColor: 'yellow', ...alignCenter }}>
                    Cell 1
                </div>
                <div
                    style={{
                        width: Math.abs(500 - initialState.x),
                        height: initialState.y,
                        backgroundColor: 'pink',
                        ...alignCenter,
                    }}
                >
                    Cell 2
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        width: initialState.x,
                        height: Math.abs(500 - initialState.y),
                        backgroundColor: 'red',
                        ...alignCenter,
                    }}
                >
                    Cell 3
                </div>
                <div
                    style={{
                        width: Math.abs(initialState.x - 500),
                        height: Math.abs(initialState.y - 500),
                        backgroundColor: 'blue',
                        ...alignCenter,
                    }}
                >
                    Cell 4
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
                <Draggable onDrag={handleDrag}>
                    <div>+</div>
                </Draggable>
            </div>
        </div>
    );
}

export default Layout;
