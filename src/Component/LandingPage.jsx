import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon } from 'react-share';

const LandingPage = () => {
  const [name, setName] = useState('');

  const proposalLink = `/proposalpage/${name}`;

  const copyToClipboard = () => {
    if (name.trim() === '') {
      alert('Please enter your Loved One\'s name before copying the link.');
    } else {
      navigator.clipboard.writeText(window.location.origin + proposalLink);
    }
  };

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
        <div>
        <button className="button" style={{margin:"0 10px"}}>
          <Link to={proposalLink}>
          Click to view Preview
          </Link>
        </button>
        <button
          className="copy-link-button"
          onClick={copyToClipboard}
        >
          Copy Link
        </button>
        </div>

        <div className="share-buttons" style={{marginBottom:'10px'}}>
          <TwitterShareButton url={proposalLink} title={`Check out this proposal for ${name}`} style={{marginRight:'20px'}}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <FacebookShareButton url={proposalLink} style={{marginLeft:'20px'}}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>

      
      </div>
    </div>
  );
};

export default LandingPage;
