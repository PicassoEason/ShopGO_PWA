import React from 'react';
import './App.css';
import Button from '@mui/joy/Button';
import care from './img/index.png';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <img className="care-image" src={care} alt="Care Connect Logo" />
        <div className="title">Welcome to</div>
        <div className="subtitle">CareConnect!</div>
        <div className="description">CareConnect is your best friend for all person.</div>
        <div className="button-container">
          <Button>使用 Google 登入</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
