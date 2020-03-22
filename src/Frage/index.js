import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';

function Frage() {
  const [s, setState] = React.useState(
    {
      current: 0,
      files: [],
      filesSubmitted: false,
      toolsInUse: []
    });

  const fragen = [
    {
      frage: 'Welche Art von Ware bietst du an',
      answers: ['Lebensmittel', 'Produkte', 'Dienstleistung']
    },
    {
      frage: 'Arbeitest du mit Terminen?',
      answers: ['Ja, Telefonisch', 'Ja per Webportal', 'Nein']
    },
    {
      frage: 'Hast du einen Lieferservice?',
      answers: ['Ja', 'Nein']
    },
    {
      frage: 'Wie erreichst du deinen Kunden?',
      answers: ['Persönlicher Kontak', 'Social Media', 'Print Werbung']
    }
  ];

  const tools = ["Eigene Website", "Google Places", "Instagram", "Tripadvisor", "Lieferando"];

  function inc() {
    setState({...s, current: s.current + 1});
  }

  function fileSelectHandler(event) {
    console.log(event.target.files[0]);
    const f = s.files.concat(event.target.files[0]);

    setState({...s, files: f});
  };

  function fileSubmitHandler() {
    s.files.map(f => console.log(f));
    setState({...s, filesSubmitted: true});
  };

  function handleCheckBox(event)
  {
    const target = event.target;

    const tiu = target.checked ?
       s.toolsInUse.concat(target.name) :
       s.toolsInUse.filter(t => t.localeCompare(target.name));

    tiu.map(t => console.log(t));
    setState({...s, toolsInUse: tiu});
  };

  return (
    <div className="frage">
      <div className="question-pane">
        {s.current < fragen.length ? (
          <Card
            frage={fragen[s.current].frage}
            answers={fragen[s.current].answers}
            onAnswerSelected={inc}
          />
        ):(!s.filesSubmitted ? (
            <div>
              <input type="file" onChange={fileSelectHandler}/>
              <div>
                {s.files.map(f => ( <div>{f.name}</div>))}
                <button onClick={fileSubmitHandler}>Sumbit</button>
              </div>
            </div>
          ) : (
            <div>
                {tools.map(t => (
                  <label>
                    {t}
                    <input
                      name={t}
                      type="checkbox"
                      onChange={handleCheckBox}
                    />
                  </label>
                ))}
                <button onClick={console.log("wat")}>Sumbit</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Frage;
