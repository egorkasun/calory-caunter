import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <div className='header'>
        Calory counter
      </div>
      <div className='picture'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/62/Patrick_Schwarzenegger_TIFF_2012.jpg' />
      </div>
      <div className='counter'>
        Counter
      </div>
      <div className='info'>
        Info
      </div>
      <div className='chat'>
        Admin
      </div>
    </div>
  );
}

export default App;
