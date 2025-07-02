import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Pages.css';

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "SpotLight 鍍膜服務介紹",
      image: "/image/news_1.jpg",
      content: (
        <div className="news-text">
          <h2>SpotLight 鍍膜服務介紹</h2>
          <p>
            自2015年創立以來，我們的品牌已經歷經「10年」的風雨洗禮，足跡遍佈全台灣。慶祝我們的直營店擴大到「2間」，
            每一個門店都以品質第一，堅守我們的初衷。
          </p>
          <p>
            感謝全台灣的朋友們，我們已經獲得超過30000筆的誠心推薦，證明了我們的堅持與努力。我們的承諾是：高CP值、
            完善的保固政策以及透明的價格，這些都讓我們成為最值得信任的夥伴。
          </p>
        </div>
      )
    },
    {
      id: 1,
      title: "注意！新車停戶外曬太陽會產生「太陽紋」",
      image: "/image/news_2.jpg",
      content: (
        <div className="news-text">
          <h2>注意！新車停戶外曬太陽會產生「太陽紋」</h2>
          <p>
            首先我們要了解"太陽紋"是如何產生的。太陽紋通常指的是車身上的炫紋，因在太陽底下或是LED燈下特別明顯，
            因此稱為「太陽紋」。為什麼會有這樣的「太陽紋」產生呢？
          </p>
          <p>
            長時間暴露在陽光下，車漆會受到紫外線的傷害，加上灰塵顆粒的摩擦，會逐漸形成細微的刮痕。
            這些刮痕在特定角度下會產生反光，看起來就像太陽紋一樣。定期鍍膜可以有效防止這種情況的發生。
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "SpotLight 鍍膜推薦報價",
      image: "/image/news_menu.png",
      content: (
        <div className="news-text">
          <h2>SpotLight 鍍膜推薦報價</h2>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <Helmet>
        <title>最新消息 - SpotLight 汽車鍍膜</title>
        <meta name="description" content="SpotLight 最新優惠消息，包含鍍膜服務介紹、優惠活動和專業建議，讓您的愛車得到最佳保護。" />
        <meta name="keywords" content="SpotLight優惠, 鍍膜優惠, 汽車美容優惠, 鍍膜活動" />
        <meta property="og:title" content="最新優惠消息 - SpotLight 汽車鍍膜" />
        <meta property="og:description" content="SpotLight 最新優惠消息，包含鍍膜服務介紹和優惠活動。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw/news" />
        <link rel="canonical" href="https://spotlight.com.tw/news" />
      </Helmet>

      <div className="page-container">
        <div className="page-content">
          <h1>最新消息</h1>
          
          <div className="news-carousel">
            <div className="carousel-container">
              <button className="carousel-button prev" onClick={prevSlide}>
                ‹
              </button>
              
              <div className="carousel-slide">
                <div className="slide-content">
                  <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="carousel-image" />
                  <div className="slide-text">
                    {slides[currentSlide].content}
                  </div>
                </div>
              </div>
              
              <button className="carousel-button next" onClick={nextSlide}>
                ›
              </button>
            </div>
            
            <div className="carousel-indicators">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News; 