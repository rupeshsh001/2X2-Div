import React, { useState } from 'react';
import './App.css';

const ResizableGrid = () => {
    const [dimensions, setDimensions] = useState([
        { width: 200, height: 200 },
        { width: 200, height: 200 },
        { width: 200, height: 200 },
        { width: 200, height: 200 },
    ]);

    const minDimension = 100; // Minimum width and height for divs

    const handleResize = (index, dx, dy) => {
        setDimensions((prevDimensions) => {
            const newDimensions = [...prevDimensions];
            newDimensions[index] = {
                width: Math.max(minDimension, newDimensions[index].width + dx),
                height: Math.max(minDimension, newDimensions[index].height + dy),
            };
            return newDimensions;
        });
    };

    return (
        <div className='grid-container'>
            {dimensions.map((dimension, index) => (
                <div
                    key={index}
                    className='resizable'
                    style={dimension}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        const startX = e.clientX;
                        const startY = e.clientY;

                        const mouseMoveHandler = (e) => {
                            const dx = e.clientX - startX;
                            const dy = e.clientY - startY;
                            handleResize(index, dx, dy);
                        };

                        const mouseUpHandler = () => {
                            document.removeEventListener('mousemove', mouseMoveHandler);
                            document.removeEventListener('mouseup', mouseUpHandler);
                        };

                        document.addEventListener('mousemove', mouseMoveHandler);
                        document.addEventListener('mouseup', mouseUpHandler);
                    }}
                >
                    Div {index + 1}
                </div>
            ))}
        </div>
    );
};

export default ResizableGrid;
