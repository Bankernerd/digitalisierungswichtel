import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="pane pane-1">
        <div className="pane-container">
          <h1>Digitalisierungswichtel</h1>
          <p>Was machen wir?</p>
        </div>
      </div>
      <div className="pane pane-2">
        <div className="pane-container">
          <h1 className="mt-3">Ich bin Händler, wie starte ich?</h1>
          <p>Als Händler xy, tu ich das zuerst</p>
          <button className="btn btn-home">Quiz starten</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
