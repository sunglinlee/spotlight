import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SpotLight - 專業汽車鍍膜服務</title>
        <meta name="description" content="SpotLight 提供專業的汽車鍍膜、貼膜服務，全台6間直營店為您服務，讓您的愛車永遠保持最佳狀態。" />
        <meta name="keywords" content="汽車鍍膜, 汽車美容, 汽車保養, 汽車清潔, 汽車保護" />
        <meta property="og:title" content="SpotLight - 專業汽車鍍膜服務" />
        <meta property="og:description" content="SpotLight 提供專業的汽車鍍膜、貼膜服務，全台2間直營店為您服務。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw" />
        <link rel="canonical" href="https://spotlight.com.tw" />
      </Helmet>

      <div className="home">
        <section className="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/home.png)` }}>
          <div className="hero-content">
            <h1>SPOTLIGHT</h1>
          </div>
        </section>

        <section className="service-section">
          <div className="section-content">
            <img src={process.env.PUBLIC_URL + '/image/home_1.jpg'} alt="服務展示" className="section-image" />
            <div className="text-content">
              <h2>精緻平價「 鍍膜x貼膜 」專門店！</h2>
              <Link to="/coating-work" className="cta-button">施工流程</Link>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-content">
            <img src={process.env.PUBLIC_URL + '/image/home_2.jpg'} alt="關於我們" className="section-image" />
            <div className="text-content">
              <h2>漆面調整糖果光澤的秘密</h2>
              <Link to="/about" className="cta-button">關於我們</Link>
            </div>
          </div>
        </section>

        <section className="stores-section">
          <div className="section-content">
            <img src={process.env.PUBLIC_URL + '/image/home_3.jpg'} alt="門市展示" className="section-image" />
            <div className="text-content">
              <h2>全台「 2」間直營店為你服務！</h2>
              <Link to="/location" className="cta-button">據點查詢</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 