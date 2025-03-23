// import React, { useState } from 'react';

// const Homepage = () => {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [image, setImage] = useState(null);

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (userInput || image) {
//       const newMessage = {
//         sender: 'user',
//         text: userInput,
//         image: image,
//       };
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setUserInput('');
//       setImage(null);

//       // Simulate bot response
//       const botMessage = {
//         sender: 'bot',
//         text: 'Thanks for the input! Let me check...',
//       };
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     }
//   };

//   const handleImageUpload = (e) => {
//     const uploadedImage = e.target.files[0];
//     if (uploadedImage) {
//       setImage(URL.createObjectURL(uploadedImage));
//     }
//   };

//   const renderMessages = () => {
//     return messages.map((msg, index) => (
//       <div key={index} className={`message ${msg.sender} mb-4 flex ${msg.sender === 'user' ? 'justify-end' : ''}`}>
//         <div
//           className={`message-bubble p-4 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//         >
//           {msg.text && <p>{msg.text}</p>}
//           {msg.image && <img src={msg.image} alt="Uploaded" className="w-full mt-2 rounded-lg" />}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="h-screen w-screen flex flex-col justify-between bg-gray-100">
//       <div className="flex-1 overflow-y-auto p-6">
//         <div className="messages space-y-4">
//           {renderMessages()}
//         </div>
//       </div>

//       <div className="p-4 bg-white shadow-lg">
//         <form onSubmit={handleSubmit} className="flex gap-4 items-center">
//           <input
//             type="text"
//             placeholder="Enter text..."
//             value={userInput}
//             onChange={handleInputChange}
//             className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Homepage;



import { useState, useRef } from 'react';

export default function Home() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Scam Detector</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-semibold mb-8 text-gray-700">Detect Potential Scams</h1>
        <div className="flex space-x-4 mb-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Enter text or URL to analyze"
            className="px-4 py-2 border rounded-md w-full sm:w-96 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Analyze
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleFileUploadClick}
          >
            Upload Document
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          {fileName && <p className="mt-2 text-sm text-gray-500">Selected File: {fileName}</p>}
        </div>
      </div>
    </div>
  );
}