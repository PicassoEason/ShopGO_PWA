import React from 'react';
import './App.css';
import Button from '@mui/joy/Button';
import care from './img/index.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Board from './board'
import BoxStatus from './boxstatus'
import Needs from './needs'
import Users from './user'


function Index() {
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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/board" element={<Board />} />
        <Route path="/boxstatus" element={<BoxStatus />} />
        <Route path="/needs" element={<Needs />} />
        <Route path="/user" element={<Users />} />
        {/* 其他路由配置 */}
      </Routes>
    </Router>
  );
}
export default App;
