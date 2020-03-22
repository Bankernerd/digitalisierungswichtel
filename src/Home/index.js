import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="pane">
        <div className="pane-container">
          <h1 className="large-screen">Digitalisierungswichtel</h1>
          <h1 className="small-screen">Digitali-sierungs-Wichtel</h1>
          <p>Wir helfen Dir Dein Geschäftsmodell zu digitalisieren?</p>
          <Link to="/frage" className="btn btn-home">
            Los gehts!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
