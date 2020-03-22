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
              <li>Bilder der Produkte auf Instagram hochladen - <a href="https://www.instagram.com">Instagram</a></li>
              <li>Aktiväten auf Facebook online stellen</li>
              <li>Emailverteiler an interessierte Kunden</li>
            </ul>
            <p>whatsapp verteiler erstellen mit Ihnen bekannten Telefonnummern von Kunden wenn Sie ihre Einverständniserklärung erhalten haben (siehe Datenschutzerklörung)</p>
          </div>

      }
    },
    {
      title: "Datenschutz",
      body: () => {
        return <div>
          Ist notwendig für jeden Webshop und wenn Sie Kundendaten speichern möchten. Eine Vorlage erhalten Sie <a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html">hier</a> zum Download.
        </div>
      }
    },
    {
      title: "Bezahlsystem",
      body: () =>{
        return <div>
          <p>Das <a href="https://sumup.de/pos/faq">SumUp</a> POS-Kassensystem kann so konfiguriert werden, dass es eine Vielzahl an Dienstleistungen und Einzelhandelsgeschäften wie Modeboutiquen, Schönheitssalons, Cafés und viele mehr unterstützt.</p> 
          <p>Große Einrichtungen, bei denen eine Tischverwaltung benötigt wird, unterstützt das SumUp Kassensystem zur Zeit nicht.</p>
          <p>Das SumUp POS-Kassensystem ist finanzamtkonform nach GoBD. Darüber hinaus ist unser Kassensystem bereits startklar für die KassenSichV. Mit regelmäßigen Software-Updates können wir diesen Status auch erfolgreich aufrecht erhalten. </p>
          <p>Im Falle einer Kassennachschau können Sie alle detaillierten Transaktionsdaten problemlos aus Ihrer POS-Cloud abrufen.</p>
        </div>
      }
    },
    {
      title: "Fördermitell",
      body: () =>{
        return <div>
          <ul>
            <li>
              Zehn-Punkte-Programm ist ein wichtiger Baustein der Hightech-Strategie der Bundesregierung. Es zielt darauf, die KMU mit den anderen Akteuren zu vernetzen sowie Wissen und Forschungsergebnisse besser für KMU nutzbar zu machen: Die Förderinitiative „Innovationsforen Mittelstand“ bietet die Möglichkeit, gemeinsam die Grenzen von Institutionen und Branchen zu durchbrechen und neue Bündnisse zu initiieren. Netzwerke und Cluster sprechen wir mit „KMU-NetC“ als Impulsgeber für KMU-orientierte FuE-Verbundprojekte an.
            </li>
            <li>
              Mikrofinanzierung der EU - Die entsprechenden Förderprogramme der EU werden im Rahmen von zwei Programmen gewährt. Das ist zum einen das Progress-Mikrofinanzierungsinstrument für Beschäftigung und soziale Eingliederung. Zum anderen gewährt auch das Rahmenprogramm für Wettbewerbsfähigkeit und Innovation der EU Gelder. Für letzteres ist der Ansprechpartner der Europäische Investitionsfonds (EIF) in Luxemburg. Für Gelder aus dem Instrument für Mikrokredite wendet man sich an die Europäische Investitionsbank (EIB), die ihren Sitz ebenfalls in Luxemburg hat, oder direkt an die Europäische Kommission in Brüssel. <a href="http://ec.europa.eu/social/main.jsp?catId=836&langId=de">Link</a>
            </li>
          </ul>
      </div>
      }
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
