import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube-embed';

function Home() {
  return (
    <div className="home">
      <div className="pane">
        <div className="pane-container">
          <h1 className="large-screen">
            Wir helfen Dir Dein Geschäftsmodell zu digitalisieren!
          </h1>
          <h1 className="small-screen">
            Wir helfen Dir Dein Geschäftsmodell zu digitalisieren!
          </h1>
          <p>Digitalisierungswichtel</p>
          <Link to="/frage" className="btn btn-home">
            Los gehts!
          </Link>
        </div>
        <div className="pane-container pt-4">
          <YouTube id="W8SRufqMrWg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
