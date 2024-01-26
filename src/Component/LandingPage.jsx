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
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className=" text-4xl font-bold mb-6">Welcome to Proposing website</h1>

        <div className="mb-6">
          <h3 className="text-lg mb-2">Enter your Loved One's name</h3>
          <input
            type="text"
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            className="py-2 px-4 text-gray-800 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6 space-x-4">
          <Link to={proposalLink}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Click to view Preview
            </button>
          </Link>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={copyToClipboard}
          >
            Copy Link
          </button>
        </div>

        <div className="mb-6 space-x-4">
          <TwitterShareButton url={proposalLink} title={`Check out this proposal for ${name}`}>
            <TwitterIcon size={32} round className="mr-4" />
          </TwitterShareButton>

          <FacebookShareButton url={proposalLink}>
            <FacebookIcon size={32} round className="ml-4" />
          </FacebookShareButton>
        </div>
        <p>To propose you lover, Enter the name of your loved one , copy the link then send copied link to your partner.</p>
      </div>
    </div>
  );
};

export default LandingPage;
