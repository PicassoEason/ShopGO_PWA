import React, { useState } from 'react';
import Footer from './component/footer';

export default function App() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState('');
    const addressOptions=[
        "中興一路",
        "中興二路",
        "其他路名1",
        "其他路名2"
        // ... 可以添加更多路名
      ]
    const handleSubmit = (e) => {
        e.preventDefault();
        // 這裡可以處理提交表單的邏輯，例如發送表單數據到後端
        console.log('Title:', title);
        console.log('Message:', message);
        console.log('Address:', address);

        // 清除表單內容
        setTitle('');
        setMessage('');
        setAddress('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                <div style={{ left: 115, top: 78, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>我需要幫助</div>
                <div style={{ left: 34, top: 166, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21, display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>稱號： Ezra Wu</div>
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>訊息：</div>
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            style={{ width: 222, height: 99, border: '1px black solid' }} 
                            placeholder="輸入訊息..." 
                        />
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>位址：</div>
                        <select 
                          value={address} 
                          onChange={(e) => setAddress(e.target.value)} 
                          style={{ width: 222, height: 29, border: '1px black solid' }}
                        >
                          <option value="" disabled selected>選擇位址...</option> {/* 你可以添加一個預設選項 */}
                          {addressOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                    </div>
                </div>
                <button 
                    style={{
                        width: 220, 
                        height: 93, 
                        left: 85, 
                        top: 624, 
                        position: 'absolute', 
                        background: '#64A2FF', 
                        borderRadius: 5, 
                        border: '3px black solid',
                        fontSize: 48,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        cursor: 'pointer'  // 為了增加點擊效果，加上 cursor
                    }}
                    onClick={() => {
                        // 在這裡放置您想執行的功能或操作
                        console.log('送出 clicked');
                    }}
                >
                    送出
                </button>

            </form>
            <Footer></Footer>
        </>
    );
}
