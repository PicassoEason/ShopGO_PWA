import React,{useState, useEffect}from 'react';
import './App.css';
import Button from '@mui/joy/Button';
import care from './img/index.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Board from './board'
import BoxStatus from './boxstatus'
import Needs from './needs'
import Users from './user'
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { auth } from './utils/firebase'
import { useNavigate  } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();
  const [user, loading] = useState(auth);

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate('/board');  // 使用 navigate 進行導向

    } catch (error) {
      console.log(error);
    }
  
  
  }

  return (
    <div className="app-container">
      <div className="content">
        <img className="care-image" src={care} alt="Care Connect Logo" />
        <div className="title">Welcome to</div>
        <div className="subtitle">CareConnect!</div>
        <div className="description">CareConnect is your best friend for all person.</div>
        <div className="button-container">
          <Button onClick={GoogleLogin}>使用 Google 登入</Button>
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
