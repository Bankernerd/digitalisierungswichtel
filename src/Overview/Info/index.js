import React from 'react';
import PropTypes from 'prop-types';
import { Information } from './Information';

function Info(props) {
  const infos = [
    {
      title: 'Kundenkontakt fördern',
      body: () => {
        return (
          <div>
            <p>
              Abhängig vom Kommunikationsverhalten ihrer Kunden wählen Sie die
              Kommunikationsart, die fuer Sie am besten passt:{' '}
            </p>
            <ul>
              <li>
                Bilder der Produkte auf Instagram hochladen -{' '}
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>Aktiväten auf Facebook online stellen</li>
              <li>Emailverteiler an interessierte Kunden</li>
            </ul>
            <p>
              whatsapp verteiler erstellen mit Ihnen bekannten Telefonnummern
              von Kunden wenn Sie ihre Einverständniserklärung erhalten haben
              (siehe Datenschutzerklörung)
            </p>
          </div>
        );
      }
    },
    {
      title: 'Datenschutz',
      body: () => {
        return (
          <div>
            Ist notwendig für jeden Webshop und wenn Sie Kundendaten speichern
            möchten. Eine Vorlage erhalten Sie{' '}
            <a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html">
              hier
            </a>{' '}
            zum Download.
          </div>
        );
      }
    },
    {
      title: 'Bezahlsystem',
      body: () => {
        return (
          <div>
            <p>
              Das <a href="https://sumup.de/pos/faq">SumUp</a> POS-Kassensystem
              kann so konfiguriert werden, dass es eine Vielzahl an
              Dienstleistungen und Einzelhandelsgeschäften wie Modeboutiquen,
              Schönheitssalons, Cafés und viele mehr unterstützt.
            </p>
            <p>
              Große Einrichtungen, bei denen eine Tischverwaltung benötigt wird,
              unterstützt das SumUp Kassensystem zur Zeit nicht.
            </p>
            <p>
              Das SumUp POS-Kassensystem ist finanzamtkonform nach GoBD. Darüber
              hinaus ist unser Kassensystem bereits startklar für die
              KassenSichV. Mit regelmäßigen Software-Updates können wir diesen
              Status auch erfolgreich aufrecht erhalten.{' '}
            </p>
            <p>
              Im Falle einer Kassennachschau können Sie alle detaillierten
              Transaktionsdaten problemlos aus Ihrer POS-Cloud abrufen.
            </p>
          </div>
        );
      }
    },
    {
      title: 'Fördermittel',
      body: () => {
        return (
          <div>
            <p>
              Zehn-Punkte-Programm ist ein wichtiger Baustein der
              Hightech-Strategie der Bundesregierung. Es zielt darauf, die KMU
              mit den anderen Akteuren zu vernetzen sowie Wissen und
              Forschungsergebnisse besser für KMU nutzbar zu machen: Die
              Förderinitiative „Innovationsforen Mittelstand“ bietet die
              Möglichkeit, gemeinsam die Grenzen von Institutionen und Branchen
              zu durchbrechen und neue Bündnisse zu initiieren. Netzwerke und
              Cluster sprechen wir mit „KMU-NetC“ als Impulsgeber für
              KMU-orientierte FuE-Verbundprojekte an.
            </p>
            <p>
              Mikrofinanzierung der EU - Die entsprechenden Förderprogramme der
              EU werden im Rahmen von zwei Programmen gewährt. Das ist zum einen
              das Progress-Mikrofinanzierungsinstrument für Beschäftigung und
              soziale Eingliederung. Zum anderen gewährt auch das Rahmenprogramm
              für Wettbewerbsfähigkeit und Innovation der EU Gelder. Für
              letzteres ist der Ansprechpartner der Europäische
              Investitionsfonds (EIF) in Luxemburg. Für Gelder aus dem
              Instrument für Mikrokredite wendet man sich an die Europäische
              Investitionsbank (EIB), die ihren Sitz ebenfalls in Luxemburg hat,
              oder direkt an die Europäische Kommission in Brüssel.{' '}
              <a href="http://ec.europa.eu/social/main.jsp?catId=836&langId=de">
                Link
              </a>
            </p>
          </div>
        );
      }
    }
  ];

  const lieferungBody = answer => {
    if (answer) {
      return () => (
        <div>
          <p>
            Erweitere Deinen Lieferdienst um kontaktloses Bezahlen und
            informiere Deine Kunden aktiv über Deine Hygienemaßnahmen. Erweitere
            ausserdem Dein Produktangebot gemäß der aktuellen Situation, stelle
            Pakete zusammen. Fokussiere Dich auf deine besten 5-10 Topseller
            plus z.B. ein Rolle Gratis Toilettenpapier und einen Beutel Nudeln.
            Sei kreativ und witzig und biete z.B. ein Überlebenspaket &
            Unterhaltungspaket an.
          </p>
        </div>
      );
    } else {
      return () => (
        <div>
          <p>
            Biete in Zukunft einen kontaktlosen Lieferdienst an und promote
            Deine 5-10 Topseller, Du kannst auch Pakete zusammenstellen, die zu
            den Kunden in der Situation passen wie z.B. ein
            Geburtstagsset/Unterhaltungsset, sei kreativ und gerne auch witzig,
            Deine Kunden brauchen jetzt positive Energie. Wir empfehlen wir
            dafür das kostengünstige Zahlungssystem Sumup. Mehr Information
            bekommst du hier:
            <a href="" alt="leerer Link">
              click!
            </a>
          </p>
        </div>
      );
    }
  };

  return (
    <div className="info">
      <h2 className="question">Infos</h2>
      <div>
        {infos.map((info, i) => (
          <Information key={i} title={info.title} body={info.body} />
        ))}
        <Information
          title={'Lieferung'}
          body={lieferungBody(props.answered[3] === 0)}
        />
      </div>
    </div>
  );
}

export default Info;
