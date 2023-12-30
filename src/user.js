import React from 'react';
export default function App() {
    return(<>
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
            <div style={{left: 119, top: 80, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>歡 迎 回 來</div>
            <div style={{width: 300, height: 65, left: 59, top: 445, position: 'absolute', background: '#64A2FF', borderRadius: 5, border: '3px black solid'}} />
            <div style={{left: 177, top: 458, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>登出</div>
            <div style={{left: 128, top: 155, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Ezra WU</div>
            <img style={{width: 300, height: 195, left: 59, top: 227, position: 'absolute'}} src="https://via.placeholder.com/300x195" />
        </div>
    </>)
}