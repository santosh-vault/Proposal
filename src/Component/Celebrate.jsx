import React from 'react';
import 'animate.css';

const Celebrate = ({ onClose }) => {
  const handleAnimationEnd = () => {
    onClose();
  };

  return (
    <div className="celebrate-container animate__animated animate__zoomIn" onAnimationEnd={handleAnimationEnd}>
      <p className="animate__animated animate__bounce">🎉 WOW 🎉</p>
    </div>
  );
};

export default Celebrate;
