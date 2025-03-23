// import React from 'react';
// import Homepage from '../src/components/Homepage.jsx';

// const App = () => {
//   return (
//     <div className="App">
//       <h1 className="text-center text-3xl font-bold my-6">Click with Caution</h1>
//       <Homepage />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Homepage from '../src/components/Homepage.jsx'; 

const App = () => {
  return (
    <div className="App h-screen flex flex-col items-center justify-center">
      {/* Content Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Click with Caution</h1>
        <div className="bg-white p-4 rounded-lg shadow-md max-w-lg w-full mb-8">
          <h2 className="text-2xl font-semibold">Welcome to the App</h2>
        </div>
      </div>
      <Homepage />
    </div>
  );
};

export default App;
