import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      
      // 當向下滾動超過 100px 時隱藏導航欄，向上滾動時顯示
      if (isScrollingDown && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={process.env.PUBLIC_URL + '/image/logo1.png'} alt="SpotLight Logo" />
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMenu}>
              關於我們
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/news" className="navbar-link" onClick={closeMenu}>
              最新消息
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/booking" className="navbar-link" onClick={closeMenu}>
              服務項目
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/coating-work" className="navbar-link" onClick={closeMenu}>
              施工流程
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/warranty" className="navbar-link" onClick={closeMenu}>
              保固須知
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/works" className="navbar-link" onClick={closeMenu}>
              精選案例
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/location" className="navbar-link" onClick={closeMenu}>
              實體門市
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 