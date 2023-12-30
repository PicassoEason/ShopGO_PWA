// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { BiArchive,BiLogoMessenger , BiSolidUser,BiHome  } from "react-icons/bi";

function Footer() {
  const buttonStyle = {
    // border: 'none', // 移除框線
    border: 'none', // 移除框線
    background: 'transparent', // 使按鈕背景透明
    marginRight: '20px',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderTop: '3px solid black',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: 'white',
      }}
    >
      <Link to="/board">
        <button style={buttonStyle}>
          <BiHome   size={28} />
        </button>
      </Link>
      <Link to="/needs">
        <button style={buttonStyle}>
          <BiLogoMessenger  size={28} />
        </button>
      </Link>
      <Link to="/boxstatus">
        <button style={buttonStyle}>
          <BiArchive size={28} />
        </button>
      </Link>
      <Link to="/user">
        <button style={buttonStyle}>
          < BiSolidUser size={28} />
        </button>
      </Link>
    </div>
  );
}

export default Footer;