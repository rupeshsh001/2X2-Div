import React from 'react';
import './Rectangle.css';

const Rectangle = ({ position }) => {
    return (
        <div className='rectangle'>
            <div className='section top-left' style={{ width: `${position.x}%`, height: `${position.y}%` }}></div>
            <div className='section top-right'></div>
            <div className='section bottom-left'></div>
            <div className='section bottom-right'></div>
        </div>
    );
};

export default Rectangle;
