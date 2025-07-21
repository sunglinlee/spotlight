import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Pages.css';

const Works = () => {
  const [imageErrors, setImageErrors] = useState({});

  // 模擬案例資料
  const worksData = [
    {
      id: 1,
      title: "Porsche 911 鍍膜施工案例",
      image: process.env.PUBLIC_URL + '/image/work_911_1.jpg'
    },
    {
      id: 2,
      title: "Porsche 911 貼膜案例",
      image: process.env.PUBLIC_URL + '/image/work_911_2.jpg'
    },
    {
      id: 3,
      title: "Audi RS4 鍍膜維護案例",
      image: process.env.PUBLIC_URL + '/image/work_rs4_1.jpg'
    },
    {
      id: 4,
      title: "Audi RS4 全車鍍膜案例",
      image: process.env.PUBLIC_URL + '/image/work_rs4_2.jpg'
    },
    {
      id: 5,
      title: "BMW M4 鍍膜施工案例",
      image: process.env.PUBLIC_URL + '/image/work_m4_1.jpg'
    },
    {
      id: 6,
      title: "BMW M4 貼膜服務案例",
      image: process.env.PUBLIC_URL + '/image/work_m4_2.jpg'
    },
    {
      id: 7,
      title: "Audi R8 鍍膜案例",
      image: process.env.PUBLIC_URL + '/image/work_r8_1.jpg'
    },
    {
      id: 8,
      title: "Audi R8 貼膜案例",
      image: process.env.PUBLIC_URL + '/image/work_r8_2.jpg'
    },
    {
      id: 9,
      title: "Porsche 718 鍍膜案例",
      image: process.env.PUBLIC_URL + '/image/work_718.JPG'
    }
  ];

  const handleImageError = (id) => {
    console.error(`圖片載入失敗: ${worksData.find(work => work.id === id)?.image}`);
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleImageLoad = (id) => {
    console.log(`圖片載入成功: ${worksData.find(work => work.id === id)?.image}`);
  };

  return (
    <>
      <Helmet>
        <title>精選案例 - SpotLight 汽車鍍膜</title>
        <meta name="description" content="SpotLight 精選汽車鍍膜案例，展示我們的專業技術和服務品質。從鍍膜到貼膜，為您的愛車提供全方位的保護方案。" />
        <meta name="keywords" content="汽車鍍膜案例, 汽車貼膜案例, 鍍膜施工, 汽車美容案例" />
        <meta property="og:title" content="精選案例 - SpotLight 汽車鍍膜" />
        <meta property="og:description" content="SpotLight 精選汽車鍍膜案例，展示我們的專業技術和服務品質。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw/works" />
        <link rel="canonical" href="https://spotlight.com.tw/works" />
      </Helmet>

      <div className="page-container">
        <div className="page-content">
          <h1>精選案例</h1>
          
          <div className="works-content">
            <div className="works-grid">
              {worksData.map((work) => (
                <div key={work.id} className="work-card">
                  <div className="work-image-container">
                    {imageErrors[work.id] ? (
                      <div className="image-error">
                        <p>圖片載入失敗</p>
                        <p>路徑: {work.image}</p>
                      </div>
                    ) : (
                      <img 
                        src={work.image} 
                        alt={work.title} 
                        className="work-image"
                        onError={() => handleImageError(work.id)}
                        onLoad={() => handleImageLoad(work.id)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works; 