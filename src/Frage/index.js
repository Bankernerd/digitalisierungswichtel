import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';

function Frage() {
  const [current, setCurrent] = React.useState(0);
  const [files, setFiles] = React.useState([]);

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

  function inc() {
    setCurrent(current + 1);
  }

  function fileSelectHandler(event){
    console.log(event.target.files[0]);
    const f = files.concat(event.target.files[0]);
    setFiles(f);
  };

  function fileSubmitHandler(){
    files.map(f => console.log(f));
  };

  return (
    <div className="frage">
      <div className="question-pane">
        {current < fragen.length ? (
          <Card
            frage={fragen[current].frage}
            answers={fragen[current].answers}
            onAnswerSelected={inc}
          />
        ):(
          <div>
            <input type="file" onChange={fileSelectHandler}/>
            <button onClick={fileSubmitHandler}>"Sumbit"</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Frage;
