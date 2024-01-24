import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  const [name, setName] = useState('');

  return (
    <div className="background-image">
      <div className="container">
        <h1 className="title">Welcome to Proposing website</h1>
        <div className="input-container">
          <h3>Enter your Loved One's name</h3>
          <input
            type="text"
            value={name}
            placeholder='name'
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>
        <button className="button">
          <Link to={`/proposalpage/${name}`}>
            Click here to create a proposal
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
