import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>關於我們 - SpotLight 汽車鍍膜</title>
        <meta name="description" content="SpotLight 汽車鍍膜成立於2015年，擁有豐富的汽車美容經驗，提供專業的鍍膜服務，累積超過30000台以上的施工經驗。" />
        <meta name="keywords" content="SpotLight鍍膜, 汽車鍍膜, 汽車美容, 鍍膜服務, 汽車保養" />
        <meta property="og:title" content="關於我們 - SpotLight 汽車鍍膜" />
        <meta property="og:description" content="SpotLight 汽車鍍膜提供專業的鍍膜服務，累積超過30000台以上的施工經驗。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw/about" />
        <link rel="canonical" href="https://spotlight.com.tw/about" />
      </Helmet>

      <div className="about-page">
        <div 
          className="about-background"
          style={{
            backgroundImage: 'url(/image/main_logo.png)'
          }}
        ></div>
        
        <div className="page-container">
          <div className="page-content">
            <h1>ABOUT US</h1>
            
            <div className="about-content">
              <div className="about-intro">
                <p>
                  SpotLight 鍍膜成立於2015年，位於北部汽車美容林立的一級戰區，直至到現在2025年已經有2間直營門市，
                  提供汽車鍍膜、貼膜的各項優質服務，秉持平價的消費、專業的施工品質，被廣大的消費者信賴，
                  再以親切的服務與完善的保固措施，讓 SpotLight 鍍膜以良心立足於汽車美容界，永遠守護您的愛車。
                </p>
              </div>

              <div className="about-description">
                <p>
                  我們從以前在業界就是專業的塗裝公司，30幾年來都是精進在漆面上的技術，
                  是日本原廠生廠製造倚重的一個台灣塗装專業公司，我們有自己的生產線與實驗設備，
                  現在我們更跨足了汽車美容的領域，相信我們會以豐富的經驗與強悍的技術背景作為 SpotLight 客人最好的後盾，
                  SpotLight 鍍膜以誠信與良好的售後服務且乎實的價格立足於台灣汽車美容市場。
                </p>
              </div>

              <div className="achievement-section">
                <h2>累積「 30000 」台以上的戰績！客人誠心推薦</h2>
                <Link to="/booking" className="about-cta-button">了解鍍膜方案</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 