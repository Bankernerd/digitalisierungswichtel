import React from 'react';
import PropTypes from 'prop-types';
import { Information } from './Information';

function Info() {
  const infos = [
    {
      title: 'Lernvideos',
      body: ''
    },
    {
      title: 'Hygienevideos',
      body: ''
    },
    {
      title: 'Datenschutz',
      body: ''
    },
    {
      title: 'Bezahlsystem',
      body: ''
    },
    {
      title: 'Kundekontakte',
      body: ''
    }
  ];

  return (
    <div className="info">
      <h2 className="question">Infos</h2>
      <div>
        {infos.map(info => (
          <Information title={info.title} body={info.body} />
        ))}
      </div>
    </div>
  );
}

export default Info;
