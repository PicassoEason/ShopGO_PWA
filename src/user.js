import React from 'react';
export default function App() {
    return(<>
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <div style={{left: 119, top: 80, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>歡 迎 回 來</div>
            <div style={{width: 300, height: 65, left: 59, top: 559, position: 'absolute', background: '#64A2FF', borderRadius: 5, border: '3px black solid'}} />
            <div style={{width: 300, height: 65, left: 59, top: 458, position: 'absolute', background: '#FF6D64', borderRadius: 5, border: '3px black solid'}} />
            <>
            {/* 登出按鈕 */}
            <button 
              style={{
                left: 177, 
                top: 572, 
                position: 'absolute', 
                color: 'black', 
                fontSize: 32, 
                fontFamily: 'Inter', 
                fontWeight: '700', 
                wordWrap: 'break-word',
                border: 'none',  // 移除邊框
                background: 'none',  // 移除背景色
                cursor: 'pointer'  // 添加手形游標
              }}
              onClick={() => {
                // 處理登出的邏輯
                console.log("登出");
              }}
            >
              登出
            </button>
          
            {/* 我需要幫助按鈕 */}
            <button 
              style={{
                left: 129, 
                top: 471, 
                position: 'absolute', 
                color: 'black', 
                fontSize: 32, 
                fontFamily: 'Inter', 
                fontWeight: '700', 
                wordWrap: 'break-word',
                border: 'none',  // 移除邊框
                background: 'none',  // 移除背景色
                cursor: 'pointer'  // 添加手形游標
              }}
              onClick={() => {
                // 處理"我需要幫助"的邏輯
                console.log("我需要幫助");
              }}
            >
              我需要幫助
            </button>
            </>

            <div style={{left: 128, top: 155, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Ezra WU</div>
            <img style={{width: 300, height: 195, left: 59, top: 227, position: 'absolute'}} src="https://via.placeholder.com/300x195" />
        </div>
    </>)
}