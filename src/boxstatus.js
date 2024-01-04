import React, { useState,useEffect } from 'react';
import boxstatus from './img/box.png'
import boxstatus2 from './img/accept.png'
import ref from './img/refresh.png';
import loca from './img/location.png';
import load from './img/loading.png';
import Footer  from './component/footer';
export default function App() {
    const [status, setStatus] =useState([]); // 初始狀態為 false
    const Status = status ? '已取貨':  '待取貨';
    const imageSource = status ? boxstatus : boxstatus2;

    useEffect(() => {
        // 在組件掛載時從 API 獲取狀態
        fetchData();
    }, []);

    const fetchData = () => {
        // 從 API 獲取狀態
        fetch('https://shopgo-rtdb-zeta.vercel.app/api/sensor')
            .then(response => response.json())
            .then(dataFromApi => {
                const parsedStatus = dataFromApi.data === "false" ? true : false;
                setStatus(parsedStatus); // 更新狀態
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
 
    return (
        <>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                <div style={{ left: 100, top: 88, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', letterSpacing: '90px' }}>狀態</div>
                <img style={{ width: 200, height: 180, left: 90, top: 198, position: 'absolute' }} src={imageSource} />
                <div style={{ left: 32, top: 443, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 22, display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <img style={{ width: 40, height: 40 }} src={load} />
                        <div style={{ color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>{Status}</div>
                    </div>
                </div>
            </div>
            <div style={{ left: 120, top: 621, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <button onClick={fetchData} className="buttonContent">
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
