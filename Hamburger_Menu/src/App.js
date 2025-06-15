import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [menuStatus, setmenuStatus] = useState(false);
  return (
    <div className="App">
      <button className='micon' onClick={() => setmenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>} 
        </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : '' }`}>
        <ul>
          <li>ChatBot</li>
          <li>Text-to-Image</li>
          <li>Text Summarizer</li>
          <li>Code Formatter</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
