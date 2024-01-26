import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProposalModal from './ProposalModel';
import Celebrate from './Celebrate';

const ProposalPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCelebrating, setCelebrating] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const celebrate = () => {
    setCelebrating(true);
    setTimeout(() => {
      setCelebrating(false);
    }, 15000);
  };

  const { name } = useParams();

  return (
    <div className=" min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          Hello, <span className="text-yellow-300">{name}</span>
        </h1>

        <button
          onClick={openModal}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Response
        </button>

        {isModalOpen && <ProposalModal isOpen={isModalOpen} onCloseProp={() => { celebrate(); closeModal(); }} />}
        {isCelebrating && <Celebrate onClose={() => setCelebrating(false)} />}
      </div>
    </div>
  );
};

export default ProposalPage;
