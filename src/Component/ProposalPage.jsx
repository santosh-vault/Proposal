import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProposalModal from './ProposalModel';


const ProposalPage = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

const {name} = useParams();
  return (
    <div>
      <h1>Hello, <span style={{color:"yellow"}}> {name}</span> </h1>
      <button onClick={openModal}
       style={{marginLeft: '80px', padding: '15px', fontSize: '1rem' }}
      >
        Response
      </button>
      <ProposalModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    
  );
};

export default ProposalPage;
