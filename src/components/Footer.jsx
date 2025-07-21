import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <ul className="footer-links">
          <li><Link to="/about"><b>關於我們</b></Link></li>
          <li><Link to="/warranty"><b>保固須知</b></Link></li>
          <li><Link to="/location"><b>實體門市</b></Link></li>
        </ul>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-copyright">
          Copyright © spotlight Powered by <b>2_dot</b>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61575954046909" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={process.env.PUBLIC_URL + '/image/fb.jpg'} alt="Facebook" className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/spotlight.2018?igsh=MWJ4NTk2djk1d2FkNw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={process.env.PUBLIC_URL + '/image/ig.jpg'} alt="Instagram" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 