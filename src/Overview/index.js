import React from 'react';

function Overview() {
  const [route, setRoute] = React.useState('overview');

  const BackBtn = () => {
    return (
      <div className="tools">
        <button className="btn" onClick={() => setRoute('overview')}>
          zurück
        </button>
      </div>
    );
  };

  const render = () => {
    switch (route) {
      case 'overview':
        return (
          <div className="overview">
            <p>Hier findest Du:</p>
            <button
              className="btn btn-home w-100 mb-2"
              onClick={() => setRoute('info')}
            >
              Informationen
            </button>
            <button
              className="btn btn-home w-100 mb-2"
              onClick={() => setRoute('tools')}
            >
              Tools
            </button>
            <button
              className="btn btn-home w-100 mb-2"
              onClick={() => setRoute('website')}
            >
              Webshop erstellen
            </button>
            <button
              className="btn btn-home w-100"
              onClick={() => setRoute('local')}
            >
              Unterstützung vor Ort
            </button>
          </div>
        );
      case 'info':
        return <div className="info"></div>;
      case 'tools':
        return <div className="tools"></div>;
      case 'website':
        return <div className="website"></div>;
      case 'local':
        return <div className="local"></div>;
      default:
        return <></>;
    }
  };

  return (
    <div className="post-frage">
      {route !== 'overview' ? <BackBtn /> : <></>}
      {render()}
    </div>
  );
}

export default Overview;
