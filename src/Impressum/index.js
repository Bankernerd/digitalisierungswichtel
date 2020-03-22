import React from 'react';

import hackathon from '../assets/Logo_Projekt_01.png';

function Impressum() {
  return (
    <div className="impressum">
      <div className="pane impressum-pane">
        <div className="pane-container">
          <h1>Impressum</h1>
          <p>Digitalisierungswichtel made by ...</p>
        </div>
      </div>
      <div className="pane impressum-pane">
        <div className="pane-container">
          <small>entstanden im Rahmen vom</small>
          <img
            src={hackathon}
            className="hackathon-img"
            alt="Hackathon Wir vs Virus"
          />
        </div>
      </div>
    </div>
  );
}

export default Impressum;
