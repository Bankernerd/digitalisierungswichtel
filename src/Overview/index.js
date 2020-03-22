import React from 'react';
import { Infos } from '../Info/Infos';

import Info from './Info';
import Tools from './Tools';
import Website from './Website';
import Local from './Local';

function Overview() {
  const [route, setRoute] = React.useState('overview');

  const BackBtn = () => {
    return (
      <div className="tools">
        <button className="btn btn-back" onClick={() => setRoute('overview')}>
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
        return <Info />;
      case 'tools':
        return <Tools />;
      case 'website':
        return <Website />;
      case 'local':
        return <Local />;
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
