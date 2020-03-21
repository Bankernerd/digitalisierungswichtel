import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="pane pane-1">
        <div className="pane-container">
          <h1>Digitalisierungswichtel</h1>
          <p>Wir helfen Dir Dein Geschäftsmodell zu digitalisieren?</p>
          <Link to="/fragen" className="btn btn-home">
            Los gehts!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
