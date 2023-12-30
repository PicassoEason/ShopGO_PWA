import React, { useState } from 'react';
import ref from './img/refresh.png';
import check from './img/accept.png';
import x from './img/delete-button.png';
import './css/board.css'
import Footer  from './component/footer';

export default function App() {
    const [buttonClickCount, setButtonClickCount] = useState(0);
    const messages = [
        {
            date: '2023/12/30',
            author: '古老師',
            content: '要不要找外國女生出去玩'
        },
        
        // ...您可以添加更多的留言
    ];
    const handleButtonClick = () => {
        // 這裡您可以放置當按鈕被點擊時想執行的任何邏輯
       console.log("click");
    };
    return(<>
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <div style={{left: 103, top: 80, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>求助留言板</div>
            <div style={{left: 32, top: 169, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
            {messages.map((message, index) => (
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 223, height: 60, background: '#FFC38C', borderRadius: 5, border: '1px #949494 solid'}} >

                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'flex'}}>
                        <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{message.date}</div>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{message.author}</div>
                        <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>{message.content}</div>
                        </div>
                        </div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex'}}>
                    <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 13 }}>
                        <img style={{ width: 30, height: 32 }} src={check} alt="Help" />
                        <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>幫助</div>
                    </button>

                    <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 13 }}>
                        <img style={{ width: 30, height: 32 }} src={x} alt="Next time" />
                        <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>下次再說</div>
                    </button>
                    </div>
                </div>
                 ))}
            </div>


            <div style={{left: 120, top: 621, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <button onClick={handleButtonClick} className="buttonContent">
                    <img src={ref} alt="refresh icon" style={{width: 70, height: 70}}/>
                    <div style={{fontSize: 32}}>
                        <p>更新</p> 
                    </div>
                </button>
            </div>
            <Footer></Footer>
        </div>
    </>)
}