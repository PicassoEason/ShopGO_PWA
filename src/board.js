import React, { useState, useEffect } from 'react';
import ref from './img/refresh.png';
import check from './img/accept.png';
import x from './img/delete-button.png';
import './css/board.css';
import Footer from './component/footer';

export default function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchData(); // 初始化時從 API 獲取資料
    }, []);

    const fetchData = () => {
        fetch('https://shopgo-fbdb-five.vercel.app/api/mes') // 請替換成您的 API 端點 URL
            .then(response => response.json())
            .then(data => {
                const sortedMessages = data.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);
                sortedMessages(data); // 更新留言狀態
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleButtonClick = () => {
        console.log("click fresh");
        fetchData(); // 當按鈕被點擊時，從 API 重新獲取資料
    };

    const sureButtonClick = () => {
        console.log("click help");
    };

    const noButtonClick = () => {
        console.log("click no help");
    };

    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                <div style={{ left: 103, top: 80, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>求助留言板</div>
                <div style={{ left: 32, top: 169, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', overflowY: 'auto', maxHeight: '75vh' }}>
                    {messages.map((message, index) => (
                        <div key={message.id} style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                                <div style={{ width: 223, height: 75, background: '#FFC38C', borderRadius: 5, border: '1px #949494 solid' }}>
                                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'flex' }}>
                                    <div style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'flex' }}>
                                        <div style={{ color: 'black', fontSize: 8, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>
                                        {new Date((message.timestamp.seconds * 1000) + (message.timestamp.nanoseconds / 1000000)).toLocaleString('en-GB', {
                                              year: 'numeric',
                                              month: 'numeric',
                                              day: 'numeric',
                                              hour: 'numeric',
                                              minute: 'numeric',
                                            })}
                                        </div>
                                        <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}> {"               "}  </div>
                                        {/* <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{message.user}</div> */}
                                        {/* <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{message.address}</div> */}
                                        <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>{message.mes}</div>
                                    </div>
                                        
                                        <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{message.user}</div>
                                        <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{message.address}</div>
                                        {/* <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>{message.mes}</div> */}
                                    </div>
                                </div>
                            </div>
                            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
                                <button onClick={sureButtonClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 13 }}>
                                    <img style={{ width: 30, height: 32 }} src={check} alt="Help" />
                                    <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>幫助</div>
                                </button>
                                <button onClick={noButtonClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 13 }}>
                                    <img style={{ width: 30, height: 32 }} src={x} alt="Next time" />
                                    <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>下次再說</div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ left: 120, top: 621, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                    <button onClick={handleButtonClick} className="buttonContent">
                        <img src={ref} alt="refresh icon" style={{ width: 70, height: 70 }} />
                        <div style={{ fontSize: 32 }}>
                            <p>更新</p>
                        </div>
                    </button>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}
