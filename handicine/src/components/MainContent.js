import React from 'react';
import './MainContent.css';
import background from '../images/backgroundImg.jpg';

const MainContent = () => {
  return (
    <div
      className="main-content"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="content-container">
        <h1>내 손 안의 약사 서비스, HANDICINE</h1>
        <p>1500 종 이상의 의약품,<br/>식품의약품안전처에서 제공한 정보로 안전하게!</p>
      </div>
    </div>
  );
};

export default MainContent;