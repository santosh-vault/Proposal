import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProposalModal from "./ProposalModel";
import Celebrate from "./Celebrate";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>propose</title>
        <meta
          name="description"
          content="Find the perfect Valentine's Day gifts for your girlfriend or boyfriend! Shop flowers, chocolates, jewelry, and more for a memorable Valentine's celebration."
        />
        <meta
          name="keywords"
          content="valentine, girlfriend, propose, valentine's day gifts, valentines gifts, valentine's day gifts for her, valentines gifts for her, valentine's day flowers, valentines flowers, valentine's day, valentines gifts for him, valentines cards, valentine's day flower delivery, valentines gifts for men, valentine's day cards, valentines flower delivery, valentine gift ideas, best valentines gifts, valentine's day ideas, best valentines gifts 2024, valentine's day delivery, valentines day roses, best valentines gifts for her, valentines delivery, unique valentines gifts, valentines roses, cute valentines gifts, valentine's day jewelry, gift suggestions for valentine's day, first valentine gift for boyfriend"
        />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center text-white  m-10  rounded-lg p-8">
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

          {isModalOpen && (
            <ProposalModal
              isOpen={isModalOpen}
              onCloseProp={() => {
                celebrate();
                closeModal();
              }}
            />
          )}
          {isCelebrating && <Celebrate onClose={() => setCelebrating(false)} />}
        </div>
      </div>
    </>
  );
};

export default ProposalPage;
