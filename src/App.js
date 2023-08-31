// import React from 'react';
// import './App.css'; // Assuming you have a CSS file to apply the styles

// function App() {
//     return (
//         <>
//             <div className='wrapper'>
//                 <div className='top-left'></div>
//                 <div className='top-right'></div>
//             </div>
//         </>
//     );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//     const [div1Width, setDiv1Width] = useState('50%');
//     const [div1Height, setDiv1Height] = useState('50%');

//     const handleResize = (newWidth) => {
//         const newDiv1Width = `${newWidth}%`;
//         const newDiv2Width = `${100 - newWidth}%`;
//         setDiv1Width(newDiv1Width);
//         setDiv1Height(newDiv1Width);
//     };

//     return (
//         <div className='grid-container'>
//             <div className='resizable' style={{ width: div1Width, height: div1Height }}>
//                 <div className='resize-handle' onMouseUp={() => handleResize(70)}></div>
//                 {/* Content for the first resizable div */}
//             </div>
//             <div className='resizable'>{/* Content for the second resizable div */}</div>
//             <div className='resizable'>{/* Content for the third resizable div */}</div>
//             <div className='resizable'>{/* Content for the fourth resizable div */}</div>
//         </div>
//     );
// }

// export default App;

import React from 'react';
import Layout from './Layout';

const App = () => {
    return (
        <div>
            <Layout />
        </div>
    );
};

export default App;

// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//     const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (event) => {
//         const rect = event.target.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;
//         setPointerPosition({ x, y });
//     };

//     return (
//         <div className='outer-rectangle' onMouseMove={handleMouseMove}>
//             <div
//                 className='inner-rectangle'
//                 style={{ left: pointerPosition.x, top: pointerPosition.y, backgroundColor: 'pink' }}
//             ></div>
//             <div
//                 className='inner-rectangle'
//                 style={{ left: pointerPosition.x, top: pointerPosition.y, backgroundColor: 'pink' }}
//             ></div>
//             <div
//                 className='inner-rectangle'
//                 style={{ left: pointerPosition.x, top: pointerPosition.y, backgroundColor: 'pink' }}
//             ></div>
//             <div
//                 className='inner-rectangle'
//                 style={{ left: pointerPosition.x, top: pointerPosition.y, backgroundColor: 'pink' }}
//             ></div>
//         </div>
//     );
// };

// export default App;

// import React from 'react';
// import './App.css'; // Assuming you have a CSS file to apply the styles

// function App() {
//     return (
//         <div className='wrapper'>
//             <div className='top-left'></div>
//             <div className='top-right'></div>
//             <div className='bottom-left'></div>
//             <div className='bottom-right'></div>
//         </div>
//     );
// }

// export default App;
