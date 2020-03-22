import React from 'react';
import PropTypes from 'prop-types';
import {Info} from './Info'

export function Infos() {
  const infos = [
    {
      title: "Kundenkontakt fördern",
      body: () => {
        return <div>
            <p>Abhängig vom Kommunikationsverhalten ihrer Kunden wählen Sie die Kommunikationsart, die fuer Sie am besten passt: </p>
            <ul>
              <li>Bilder der Produkte auf Instagram hochladen - <a href="www.instagram.com">Instagram</a></li>
              <li>Aktiväten auf Facebook online stellen</li>
              <li>Emailverteiler an interessierte Kunden</li>
            </ul>
            <p>whatsapp verteiler erstellen mit Ihnen bekannten Telefonnummern von Kunden wenn Sie ihre Einverständniserklärung erhalten haben (siehe Datenschutzerklörung)</p>
          </div>

      }
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
    }
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
