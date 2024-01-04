import React from 'react';
import {auth} from './utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate  } from 'react-router-dom';
import { useEffect, useState } from "react"
import Footer from './component/footer';
import Goog from './img/google.png';
export default function App() {

    const [token ,setToken] = useState('')
    const [user,loading]=useAuthState(auth)
    const [username, setUsername] = useState('');
    console.log(token)
    const navigate = useNavigate();
    useEffect(() => {
      setToken(localStorage.getItem('token'))
      if (user) {
        setUsername(user.displayName);
      }
    },[user])

    if (loading) return <h1>Loading ....</h1>
    
    const logout=async()=>{
        auth.signOut();  // 登出 Firebase 認證
        localStorage.removeItem('token');
        if ((!user)|| (token=="")) 
        navigate('/');  // 使用 navigate 進行導向
        
    }

    // const helpList=async()=>{
    //   console.log("click help")
    // }

    if (user || token !="")
    return(<>
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <div style={{left: 119, top: 80, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>歡 迎 回 來</div>
            <div style={{width: 300, height: 65, left: 59, top: 559, position: 'absolute', background: '#64A2FF', borderRadius: 5, border: '3px black solid'}} />
            {/* <div style={{width: 300, height: 65, left: 59, top: 450, position: 'absolute', background: '#FF649C', borderRadius: 5, border: '3px black solid'}} /> */}

            <>
            {/* 登出按鈕 */}
            <button 
              style={{
                left: 170, 
                top: 572, 
                position: 'absolute', 
                color: 'black', 
                fontSize: 32, 
                fontFamily: 'Inter', 
                fontWeight: '650', 
                wordWrap: 'break-word',
                border: 'none',  // 移除邊框
                background: 'none',  // 移除背景色
                cursor: 'pointer'  // 添加手形游標
              }}
              onClick={logout}
            >
              登出
            </button>
            </>
            <>
            {/* 關懷清單 */}
            {/* <button 
              style={{
                left: 140, 
                top: 463, 
                position: 'absolute', 
                color: 'black', 
                fontSize: 32, 
                fontFamily: 'Inter', 
                fontWeight: '650', 
                wordWrap: 'break-word',
                border: 'none',  // 移除邊框
                background: 'none',  // 移除背景色
                cursor: 'pointer'  // 添加手形游標
              }}
              onClick={helpList}
            >
              關懷清單
            </button> */}
            </>

            <div style={{left: 128, top: 155, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>{username}</div>
            <img style={{width: 180, height: 120, left: 100, top: 227, position: 'absolute'}} src={Goog} />
        </div>
        <Footer></Footer>
    </>)
}