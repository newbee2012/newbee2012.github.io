import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

function App() {
  const [message, setMessage] = useState('');
  const floors = [6, 5, 4, 3, 2, 1];

  const handleButtonClick = (floor) => {
    setMessage(`电梯即将去${floor}楼`);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gradient-to-b from-gray-700 to-gray-800 p-8 rounded-xl shadow-2xl">
        <div className="mb-6 text-center">
          <div className="text-2xl font-bold text-gray-300 mb-2">电梯控制面板</div>
          <div className="h-12 bg-black rounded flex items-center justify-center">
            <p className="text-green-500 text-lg">{message}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {floors.map((floor) => (
            <button
              key={floor}
              onClick={() => handleButtonClick(floor)}
              className="w-20 h-20 rounded-full bg-gradient-to-b from-yellow-500 to-yellow-600 text-white text-2xl font-bold shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            >
              {floor}
            </button>
          ))}
          <button className="w-20 h-20 rounded-full bg-gradient-to-b from-red-500 to-red-600 text-white text-2xl font-bold shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
            <ChevronUp size={32} className="mx-auto" />
          </button>
          <button className="w-20 h-20 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white text-2xl font-bold shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            <ChevronDown size={32} className="mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;