import React from 'react';
import userimage from './img/google.png'
export default function App() {
    const data = [
        {
          color: 'black',
          roadName: '中興新村 華山路',
          status: '待取貨',
          imageUrl: 'https://via.placeholder.com/40x40'
        },
        // 您可以添加更多的資料項目
      ];
    return(<>
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <div style={{left: 100, top: 88, position: 'absolute', color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word',letterSpacing: '90px'}}>狀態</div>
            <img style={{width: 200, height: 180, left: 90, top: 198, position: 'absolute'}} src={userimage} />
            {data.map((item, index) => (
                <div key={index} style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', marginBottom: '20px' }}>
                  {/* 根據您的需求，可以加入其他的樣式或條件 */}
                  {item.imageUrl ? (
                    <img style={{ width: 40, height: 40 }} src={item.imageUrl} alt="Placeholder" />
                  ) : (
                    <div style={{ width: 40, height: 40, position: 'relative' }}>
                      <div style={{ width: 30, height: 40, left: 5, top: 0, position: 'absolute', background: 'black' }}></div>
                      <div style={{ width: 15, height: 15, left: 12.50, top: 7.50, position: 'absolute', background: 'black' }}></div>
                    </div>
                  )}
                  <div style={{ color: item.color, fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>
                    {item.roadName}
                  </div>
                  <div style={{ color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>
                    {item.status}
                  </div>
                </div>
             ))}
        </div>
    </>)
}