import React from 'react';
import './Icon.css';

const Icon = ({ position, onMove }) => {
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = e.target.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;
        onMove(x * 100, y * 100);
    };

    return (
        <div className='icon' style={{ left: `${position.x}%`, top: `${position.y}%` }} onMouseMove={handleMouseMove}>
            &#x21c4;
        </div>
    );
};

export default Icon;
