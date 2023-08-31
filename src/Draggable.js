import React from 'react';
import { useDrag } from 'react-dnd';

const Draggable = () => {
    const [, dragRef] = useDrag({
        type: 'DRAGGABLE_PLUS',
    });

    return (
        <div
            ref={dragRef}
            style={{
                fontSize: '24px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                cursor: 'grab',
            }}
        >
            +
        </div>
    );
};

export default Draggable;
