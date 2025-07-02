import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactButton.css';

const ContactButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/location');
  };

  return (
    <div className="contact-button-container">
      <button 
        className="contact-button"
        onClick={handleClick}
        aria-label="聯絡我們"
      >
        <span className="contact-text">聯絡我們</span>
      </button>
    </div>
  );
};

export default ContactButton; 