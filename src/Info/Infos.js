import React from 'react';
import PropTypes from 'prop-types';
import {Info} from './Info'

export function Infos() {
  const infos = [
    {
      title: "Lernvideos",
      body: ""
    },
    {
      title: "Hygienevideos",
      body: ""
    },
    {
      title: "Datenschutz",
      body: ""
    },
    {
      title: "Bezahlsystem",
      body: ""
    },
    {
      title: "Kundekontakte",
      body: ""
    },
  ];

  return (
    <div className="infos">
      <h2 className="question">Infos</h2>
      <div>
        {infos.map(info => (
          <Info
            title={info.title}
            body={info.body}
          />
        ))}
      </div>
    </div>
  );
}
