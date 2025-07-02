import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Pages.css';

const CoatingWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stepSlides, setStepSlides] = useState({
    step1: 0,
    step2: 0,
    step3: 0,
    step4: 0,
    step5: 0
  });

  // 施工流程圖片輪播資料
  const coatingImages = [
    {
      id: 1,
      title: "前置溝通與評估",
      image: "/image/1.png",
      description: "與客戶接洽確認方案，現場看實車確認施工方式"
    },
    {
      id: 2,
      title: "鍍膜前洗車作業",
      image: "/image/6.png",
      description: "專業深度清潔，去除車身沙塵、柏油、鐵粉"
    },
    {
      id: 3,
      title: "拋光作業",
      image: "/image/home_1.jpg",
      description: "全車細紋修護作業，門碗細紋修復作業"
    },
    {
      id: 4,
      title: "鍍膜作業",
      image: "/image/home_2.jpg",
      description: "車身鍍膜、鋁圈鍍膜、玻璃鍍膜作業"
    },
    {
      id: 5,
      title: "內裝外觀清潔保養",
      image: "/image/home_3.jpg",
      description: "室內清潔、車身細節加強、鍍鉻飾條清潔"
    },
    {
      id: 6,
      title: "檢查交車工作",
      image: "/image/home.png",
      description: "技師自檢、主管審核、拍攝完工照、說明保養事項"
    }
  ];

  // 各步驟專用圖片
  const stepImages = {
    step1: [
      { id: 1, title: "客戶接洽", image: "/image/1.png", description: "與客戶接洽確認方案進行預約" },
      { id: 2, title: "現場評估", image: "/image/6.png", description: "到現場看實車確認施工方式" },
      { id: 3, title: "漆面檢查", image: "/image/home_1.jpg", description: "評估漆面狀況是否有受損" }
    ],
    step2: [
      { id: 1, title: "車身冷卻", image: "/image/home_2.jpg", description: "等待車身冷卻施工" },
      { id: 2, title: "深度清潔", image: "/image/home_3.jpg", description: "高壓水槍沖洗去除車身沙塵" },
      { id: 3, title: "專業清洗", image: "/image/home.png", description: "汽車專用泡沫清洗車身" }
    ],
    step3: [
      { id: 1, title: "遮蔽保護", image: "/image/1.png", description: "黏貼遮蔽膠帶，前置作業" },
      { id: 2, title: "車標保護", image: "/image/6.png", description: "車標包覆保護" },
      { id: 3, title: "細紋修護", image: "/image/home_1.jpg", description: "全車細紋修護作業" }
    ],
    step4: [
      { id: 1, title: "除蠟清洗", image: "/image/home_2.jpg", description: "除蠟水清洗車身" },
      { id: 2, title: "IPA脫酯", image: "/image/home_3.jpg", description: "全車IPA脫酯（兩次）" },
      { id: 3, title: "鍍膜施工", image: "/image/home.png", description: "車身鍍膜作業" }
    ],
    step5: [
      { id: 1, title: "室內清潔", image: "/image/1.png", description: "室內吸塵，擦拭整理" },
      { id: 2, title: "外觀保養", image: "/image/6.png", description: "車身外部細節加強擦拭" },
      { id: 3, title: "鍍鉻清潔", image: "/image/home_1.jpg", description: "鍍鉻飾條清潔" }
    ]
  };

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coatingImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [coatingImages.length]);

  // 各步驟自動輪播
  useEffect(() => {
    const timers = {};
    Object.keys(stepSlides).forEach(step => {
      timers[step] = setInterval(() => {
        setStepSlides(prev => ({
          ...prev,
          [step]: (prev[step] + 1) % stepImages[step].length
        }));
      }, 4000);
    });
    
    return () => {
      Object.values(timers).forEach(timer => clearInterval(timer));
    };
  }, [stepSlides, stepImages]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coatingImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coatingImages.length) % coatingImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextStepSlide = (step) => {
    setStepSlides(prev => ({
      ...prev,
      [step]: (prev[step] + 1) % stepImages[step].length
    }));
  };

  const prevStepSlide = (step) => {
    setStepSlides(prev => ({
      ...prev,
      [step]: (prev[step] - 1 + stepImages[step].length) % stepImages[step].length
    }));
  };

  const goToStepSlide = (step, index) => {
    setStepSlides(prev => ({
      ...prev,
      [step]: index
    }));
  };

  // 輪播組件
  const Carousel = ({ images, currentSlide, onNext, onPrev, onGoToSlide, className = "" }) => (
    <div className={`coating-carousel ${className}`}>
      <div className="carousel-container">
        <div className="carousel-slide">
          <img 
            src={images[currentSlide].image} 
            alt={images[currentSlide].title}
            className="carousel-image"
          />
          <div className="slide-overlay">
            <h3>{images[currentSlide].title}</h3>
            <p>{images[currentSlide].description}</p>
          </div>
        </div>
        
        <button className="carousel-button prev" onClick={onPrev}>
          ‹
        </button>
        <button className="carousel-button next" onClick={onNext}>
          ›
        </button>
        
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => onGoToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>鍍膜施工流程 - SpotLight 汽車鍍膜</title>
        <meta name="description" content="SpotLight 專業鍍膜施工流程，七大重點38項細節，對愛車的呵護從前置溝通到完工交付，每個步驟都嚴格把關。" />
        <meta name="keywords" content="鍍膜施工流程, 汽車鍍膜, 鍍膜作業, 汽車美容施工" />
        <meta property="og:title" content="鍍膜施工流程 - SpotLight 汽車鍍膜" />
        <meta property="og:description" content="專業鍍膜施工流程，七大重點38項細節，對愛車的呵護。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw/coating-work" />
        <link rel="canonical" href="https://spotlight.com.tw/coating-work" />
      </Helmet>

      <div className="page-container">
        <div className="page-content">
          <h1>鍍膜施工說明</h1>
          <h2>對愛車的呵護 - 七大重點 38項細節</h2>

          {/* 圖片輪播區塊 */}
          <div className="coating-carousel">
            <div className="carousel-container">
              <div className="carousel-slide">
                <img 
                  src={coatingImages[currentSlide].image} 
                  alt={coatingImages[currentSlide].title}
                  className="carousel-image"
                />
                <div className="slide-overlay">
                  <h3>{coatingImages[currentSlide].title}</h3>
                  <p>{coatingImages[currentSlide].description}</p>
                </div>
              </div>
              
              <button className="carousel-button prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="carousel-button next" onClick={nextSlide}>
                ›
              </button>
              
              <div className="carousel-indicators">
                {coatingImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 施工流程詳細說明 */}
          <div className="coating-steps">
            <div className="step-section">
              <h3>1. 前置溝通</h3>
              <Carousel 
                images={stepImages.step1}
                currentSlide={stepSlides.step1}
                onNext={() => nextStepSlide('step1')}
                onPrev={() => prevStepSlide('step1')}
                onGoToSlide={(index) => goToStepSlide('step1', index)}
                className="step-carousel"
              />
              <div className="step-content">
                <ul>
                  <li>與客戶接洽確認方案進行預約</li>
                  <li>到現場看實車確認施工方式確認最終價格</li>
                  <li>評估漆面狀況是否有受損並跟客人告知</li>
                </ul>
              </div>
            </div>

            <div className="step-section">
              <h3>2. 鍍膜前洗車作業</h3>
              <Carousel 
                images={stepImages.step2}
                currentSlide={stepSlides.step2}
                onNext={() => nextStepSlide('step2')}
                onPrev={() => prevStepSlide('step2')}
                onGoToSlide={(index) => goToStepSlide('step2', index)}
                className="step-carousel"
              />
              <div className="step-content">
                <ul>
                  <li>等待車身冷卻施工</li>
                  <li>拆除車牌並整理</li>
                  <li>輪圈內外部清洗</li>
                  <li>高壓水槍沖洗去除車身沙塵</li>
                  <li>汽車專用泡沫清洗車身</li>
                  <li>柏油，鐵粉去除（跑黏土）</li>
                  <li>低壓水車體細部清洗</li>
                  <li>車身縫隙專業細節刷清潔</li>
                  <li>引擎室深層清潔</li>
                  <li>專用擦拭布，去除車身水分</li>
                  <li>高壓風槍去除縫隙中殘餘的水分</li>
                </ul>
              </div>
            </div>

            <div className="step-section">
              <h3>3. 拋光作業</h3>
              <Carousel 
                images={stepImages.step3}
                currentSlide={stepSlides.step3}
                onNext={() => nextStepSlide('step3')}
                onPrev={() => prevStepSlide('step3')}
                onGoToSlide={(index) => goToStepSlide('step3', index)}
                className="step-carousel"
              />
              <div className="step-content">
                <ul>
                  <li>黏貼遮蔽膠帶，前置作業</li>
                  <li>車標包覆保護</li>
                  <li>全車細紋修護作業（依照車況分等級拋光）</li>
                  <li>門碗細紋修復作業（依照車況分等級拋光）</li>
                </ul>
              </div>
            </div>

            <div className="step-section">
              <h3>4. 鍍膜作業</h3>
              <Carousel 
                images={stepImages.step4}
                currentSlide={stepSlides.step4}
                onNext={() => nextStepSlide('step4')}
                onPrev={() => prevStepSlide('step4')}
                onGoToSlide={(index) => goToStepSlide('step4', index)}
                className="step-carousel"
              />
              <div className="step-content">
                <ul>
                  <li>除蠟水清洗車身</li>
                  <li>全車IPA脫酯（兩次）</li>
                  <li>車身鍍膜作業（依方案施工）</li>
                  <li>全車鋁圈鍍膜作業（依方案施工）</li>
                  <li>全車玻璃鍍膜作業（依方案施工）</li>
                </ul>
              </div>
            </div>

            <div className="step-section">
              <h3>5. 內裝、外觀清潔保養</h3>
              <Carousel 
                images={stepImages.step5}
                currentSlide={stepSlides.step5}
                onNext={() => nextStepSlide('step5')}
                onPrev={() => prevStepSlide('step5')}
                onGoToSlide={(index) => goToStepSlide('step5', index)}
                className="step-carousel"
              />
              <div className="step-content">
                <ul>
                  <li>室內吸塵，擦拭整理</li>
                  <li>室內塑料皮椅保護乳</li>
                  <li>車身外部細節加強擦拭</li>
                  <li>鍍鉻飾條清潔</li>
                  <li>排氣管清潔</li>
                  <li>玻璃內外擦拭去除髒污</li>
                  <li>輪胎、鋁圈保養</li>
                </ul>
              </div>
            </div>

            <div className="step-section">
              <h3>6. 檢查交車工作</h3>
              <div className="step-content">
                <ul>
                  <li>技師自檢（施工技師檢查是否有瑕疵）</li>
                  <li>主管審核（嚴厲檢核是否有遺漏之瑕疵）</li>
                  <li>與客人聯絡預估交車時間</li>
                  <li>技師再次做最後檢查車體狀況</li>
                  <li>拍攝車輛完工照</li>
                  <li>鎖車牌等待客戶來牽車及驗車</li>
                  <li>說明鍍膜車的保養與照護，及注意事項</li>
                  <li>加入LINE@取得電子保固說明</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 聯絡按鈕 */}
          <div className="coating-cta">
            <h3>秉持平價的消費、專業的施工品質</h3>
            <p>以良心立足於汽車美容界，永遠守護您的愛車。</p>
            <button className="cta-button">點我聯繫客服預約</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoatingWork; 