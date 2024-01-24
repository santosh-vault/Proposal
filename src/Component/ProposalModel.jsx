import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const predefinedTexts = [
  'I always wanted to say you something',
  'But the Circumtances resist me always',
  'But today is the special day',
  'so, i gather bravery to tell you',
  'that',
  'Damn, its so hard! haha..',
  'You may have already guessed it',
  'Yes, You are everything to me',
  'so',
  `${name}, will you be my girlfriend ?`,
  'I LOVE YOU',

];

const ProposalModal = ({ isOpen, onClose }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const {name} = useParams();

  const handleNextText = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % predefinedTexts.length);
  };

  const handlePropose = () => {
    const selectedText = predefinedTexts[currentTextIndex];
    // Handle the propose action, e.g., send the proposal text to a server, etc.
    console.log('Proposing:', selectedText);
    // Close the modal after proposing
    onClose();
  };

  return (
    <div className={`proposal-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>close</span>
        <p>{predefinedTexts[currentTextIndex]}</p>
        <div className="button-container">
          <button onClick={handlePropose}>NO</button>
          <button onClick={handleNextText}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;
