import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const predefinedTexts = [
  'I always wanted to say you something',
  'But the circumstances resist me always',
  'But today is the special day',
  'So, I gather bravery to tell you',
  'That',
  'Damn, it\'s so hard! Haha...',
  'You may have already guessed it',
  'Yes, You are everything to me',
  'So',
  'I LOVE YOU',
  '{name}, will you be my girlfriend?',
];

const ProposalModal = ({ isOpen, onCloseProp }) => {
  const { name } = useParams();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const handleNextText = () => {
    if (currentTextIndex < predefinedTexts.length - 1) {
      setCurrentTextIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsShaking(true); 
      setTimeout(() => {
        setIsShaking(false); 
        onCloseProp(); 
      }, 1000); 
    }
  };

  const handleNoClick = () => {
    setIsShaking(true); 
    setTimeout(() => {
      setIsShaking(false); 
    }, 1000); 
  };

  const handlePropose = () => {
    const selectedText = predefinedTexts[currentTextIndex].replace('{name}', name);
    console.log('Proposing:', selectedText);
    onCloseProp(); 
  };

  return (
    <div className={`proposal-modal ${isOpen ? 'open' : ''} ${isShaking ? 'shake' : ''}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={onCloseProp}>×</span>
        <p>{predefinedTexts[currentTextIndex].replace('{name}', name)}</p>
        <div className="button-container">
          {currentTextIndex === predefinedTexts.length - 1 ? (
            <>
              <button className="yes-btn" onClick={handlePropose}>Yes</button>
              <button className="no-btn" onClick={handleNoClick}>No</button>
            </>
          ) : (
            <button className="next-btn" onClick={handleNextText}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;
