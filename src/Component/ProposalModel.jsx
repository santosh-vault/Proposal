import React, { useState } from "react";
import { useParams } from "react-router-dom";

const predefinedTexts = [
  "I've always wanted to say something to you,",
  "But circumstances always seemed to get in the way,",
  "Today, however, is special,",
  "So, I'm summoning all my courage to finally tell you,",
  "That...",
  "Wow, this is tougher than I thought! Haha...",
  "You might have already guessed it,",
  "Yes, you mean everything to me,",
  "So...",
  "I LOVE YOU,",
  "{name}, will you be my Love?",
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
    const selectedText = predefinedTexts[currentTextIndex].replace(
      "{name}",
      name
    );
    console.log("Proposing:", selectedText);
    onCloseProp();
  };

  return (
    <div
      className={`proposal-modal ${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 h-full w-full flex items-center justify-center`}
    >
      <div
        className={`modal-content bg-white p-8 rounded shadow-lg ${
          isShaking ? "shake" : ""
        }`}
        style={{ width: "380px" }}
      >
        <p
          className="text-gray-100 text-4xl close-btn cursor-pointer absolute top-4 right-4"
          onClick={onCloseProp}
        >
          ×
        </p>
        <p className="text-gray-800">
          {predefinedTexts[currentTextIndex].replace("{name}", name)}
        </p>
        <div className="button-container mt-6">
          {currentTextIndex === predefinedTexts.length - 1 ? (
            <>
              <button
                className="yes-btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={handlePropose}
              >
                Yes
              </button>
              <button
                className="no-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNoClick}
              >
                No
              </button>
            </>
          ) : (
            <button
              className="next-btn bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextText}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalModal;
