import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Pages.css';

const Booking = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 菜單圖片資料
  const menuImages = [
    { id: 0, image: process.env.PUBLIC_URL + '/image/main_logo.png', alt: "SpotLight Logo" },
    { id: 1, image: process.env.PUBLIC_URL + '/image/menu_1.png', alt: "菜單1" },
    { id: 2, image: process.env.PUBLIC_URL + '/image/menu_2.png', alt: "菜單2" },
    { id: 3, image: process.env.PUBLIC_URL + '/image/menu_3.png', alt: "菜單3" },
    { id: 4, image: process.env.PUBLIC_URL + '/image/menu_4.png', alt: "菜單4" },
    { id: 5, image: process.env.PUBLIC_URL + '/image/menu_5.png', alt: "菜單5" }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === menuImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? menuImages.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <>
      <Helmet>
        <title>服務菜單 - SpotLight 汽車鍍膜</title>
        <meta name="description" content="SpotLight 專業服務菜單，提供鍍膜、美容、洗車等全方位汽車保養服務。" />
        <meta name="keywords" content="汽車鍍膜菜單, 洗車保養菜單, 汽車美容服務" />
        <meta property="og:title" content="服務菜單 - SpotLight 汽車鍍膜" />
        <meta property="og:description" content="專業服務菜單，提供全方位汽車保養服務。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotlight.com.tw/booking" />
        <link rel="canonical" href="https://spotlight.com.tw/booking" />
      </Helmet>

      <div className="page-container">
        <div className="page-content">
          <div className="menu-gallery">
            {menuImages.map((menu, index) => (
              <div 
                key={menu.id} 
                className="menu-item"
                onClick={() => openLightbox(index)}
              >
                <img src={menu.image} alt={menu.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 燈箱 */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              ‹
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={menuImages[currentImageIndex].image} 
                alt={menuImages[currentImageIndex].alt} 
                className="lightbox-image"
              />
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              ›
            </button>
            
            <div className="lightbox-indicators">
              {menuImages.map((_, index) => (
                <span 
                  key={index}
                  className={`lightbox-indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking; 