import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Pages.css';

const Location = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>實體門市 - SpotLight 汽車鍍膜</title>
        <meta name="description" content="SpotLight 全台門市位置，包括台北、新北、桃園等地區。提供專業的汽車鍍膜服務，歡迎就近預約。" />
        <meta name="keywords" content="SpotLight門市, 汽車鍍膜門市, 台北鍍膜, 新北鍍膜, 桃園鍍膜" />
        <meta property="og:title" content="實體門市 - SpotLight 汽車鍍膜" />
        <meta property="og:description" content="SpotLight 全台門市位置，提供專業的汽車鍍膜服務，歡迎就近預約。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw/location" />
        <link rel="canonical" href="https://spotlight.com.tw/location" />
      </Helmet>

      <div className="location-page">
        <div 
          className="location-background"
          style={{
            transform: `scale(${1 + scrollY * 0.0001})`,
            opacity: 1,
            backgroundImage: 'url(/image/main_logo.png)'
          }}
        ></div>
        
        <div className="page-container">
          <div className="page-content">
            <h1>全台門市位置</h1>
            
            <div className="location-content">
              <div className="store-card">
                <h2>桃園大有店</h2>
                <p>店名：Spotlight(彪伸汽車美容)</p>
                <p>專線：<a href="tel:03-3160000" className="phone-link">03-3160000</a></p>
                <p>line：<a href="https://line.me/ti/p/@433acxlz" target="_blank" rel="noopener noreferrer" className="line-link">@433acxlz</a></p>
                <p>地址：桃園市桃園區大有路662號</p>
                <a href="https://maps.app.goo.gl/nHDANd4R1dkppqdXA" target="_blank" rel="noopener noreferrer" className="map-link">
                  開啟GOOGLEMAP
                </a>
              </div>

              <div className="store-card">
                <h2>蘆竹南崁店</h2>
                <p>店名：y.s dazzling(曜新車體美研)</p>
                <p>專線：<a href="tel:03-3530116" className="phone-link">03-3530116</a></p>
                <p>line：<a href="https://line.me/ti/p/@599mqidi" target="_blank" rel="noopener noreferrer" className="line-link">@599mqidi</a></p>
                <p>地址：桃園市蘆竹區南福街172號</p>
                <a href="https://maps.app.goo.gl/ysHAfu1aDAQxzDfv7" target="_blank" rel="noopener noreferrer" className="map-link">
                  開啟GOOGLEMAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location; 