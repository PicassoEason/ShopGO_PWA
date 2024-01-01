import React, { useState } from 'react';
import boxstatus from './img/box.png'
import boxstatus2 from './img/accept.png'
import ref from './img/refresh.png';
import loca from './img/location.png';
import load from './img/loading.png';
import Footer  from './component/footer';
export default function App() {
    const [buttonClickCount, setButtonClickCount] = useState(0);
    const status = false; // 假設這是您的布林值，您可以根據實際情況設置它 true 有東西 false 無東西
    const Status= status ? '待取貨':'已取貨';
    const imageSource = status ? boxstatus : boxstatus2;
    const initialData = [
        {
            // roadName: '中興村 華山路',
            status: '待取貨',
        },
        // 其他項目
    ];

    // 資料狀態
    const [data, setData] = useState(initialData);

    const handleButtonClick = () => {
        // 模擬更新資料的過程
        const updatedData = [
            // 模擬新的資料項目
            {
                // roadName: '新的道路',
                status: '已取貨',
            },
            // ... 其他項目
        ];
        
        // 更新資料狀態
        setData(updatedData);
    };
 
    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                <div style={{ left: 100, top: 88, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', letterSpacing: '90px' }}>狀態</div>
                <img style={{ width: 200, height: 180, left: 90, top: 198, position: 'absolute' }} src={imageSource} />
                <div style={{ left: 32, top: 443, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 22, display: 'inline-flex' }}>
                   
                    {data.map((item, index) => (
                        <div key={index} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                            <img style={{ width: 40, height: 40 }} src={load} />
                            <div style={{ color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>{item.status}</div>
                        </div>
                    ))}
                </div>
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
        </>
    );
}
