// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaBell, FaUser } from 'react-icons/fa';

function Footer() {
  const buttonStyle = {
    border: 'none', // 移除框線
    background: 'transparent', // 使按鈕背景透明
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderTop: '1px solid black',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: 'white',
      }}
    >
      {/* <Link to="/search">
        <button style={buttonStyle}>
          <FaSearch size={28} />
        </button>
      </Link> */}
      <Link to="/message">
        <button style={buttonStyle}>
          <FaHome size={28} />
        </button>
      </Link>
      <Link to="/notifi">
        <button style={buttonStyle}>
          <FaBell size={28} />
        </button>
      </Link>
      <Link to="/profile">
        <button style={buttonStyle}>
          <FaUser size={28} />
        </button>
      </Link>
    </div>
  );
}

export default Footer;