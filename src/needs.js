import React from 'react';
import Footer from './component/footer';
import {auth} from './utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from "react"
export default function App() {
    const [token, setToken] = useState('');
    const [user, loading] = useAuthState(auth);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState('');
    
    useEffect(() => {
        setToken(localStorage.getItem('token'))
        if (user) {
          setUsername(user.displayName);
        }
    }, [user]);

    if (loading) return <h1>Loading ....</h1>
    
    const addressOptions=[
        "省府路",
        "府西路",
        "光華路",
        "光華一路",
        "光華二路",
        "光華二路一街",
        "光華二路二街",
        "光華三路",
        "光華四路",
        "光華四路一街",
        "光華五路",
        "光華六路",
        "光華十路",
        "中學路",
        "光榮東路",
        "光榮西路",
        "光榮東路一街",
        "光榮北路四街",
        "光榮北路一街",
        "光榮北路二街",
        "光榮北路三街",
        "光榮北路四街",
        "光榮北路五街",
        "光榮北路六街",
        "光榮西路一街",
        "光榮南路",
        "光榮南路一街",
        "光榮南路二街",
        "光榮南路三街",
        "光榮南路四街",
        "環山路",
        "中正路",
        // ... 可以添加更多路名
      ]
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = {
            mes: message,
            address: address,
            user: username,
        };
    
        try {
            const response = await fetch('http://localhost:5001/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // You can add additional headers if necessary
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Data submitted successfully:', data);
                // Do something after successful submission if needed
            } else {
                console.error('Failed to submit data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    
        // Clear form fields after submission
 
        setMessage('');
        setAddress('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                <div style={{ left: 115, top: 78, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>我需要幫助</div>
                <div style={{ left: 34, top: 166, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21, display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>稱號：</div>
                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{username}</div>
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>訊息：</div>
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            style={{ width: 222, height: 99, border: '1px black solid' }} 
                            placeholder="輸入訊息..." 
                            required
                        />
                    </div>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>位址：</div>
                        <select 
                          value={address} 
                          onChange={(e) => setAddress(e.target.value)} 
                          style={{ width: 222, height: 29, border: '1px black solid' }}
                          required
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
