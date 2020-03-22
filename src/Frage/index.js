import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';

function Frage() {
  const [s, setState] = React.useState({
    current: 0,
    files: [],
    toolsInUse: [],
    step: 'questions'
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

  const tools = [
    'Eigene Website',
    'Google Places',
    'Instagram',
    'Tripadvisor',
    'Lieferando'
  ];

  function inc() {
    let c = s.current + 1;
    let step = c >= fragen.length ? 'upload' : s.step;
    setState({ ...s, current: c, step: step });
  }

  const progress = ((s.current + 1) / fragen.length) * 100;

  function fileSelectHandler(event) {
    console.log(event.target.files[0]);
    if (checkMimeType(event)) {
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        function() {
          const f = s.files.concat(reader.result);
          setState({ ...s, files: f });
        },
        false
      );
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  function fileSubmitHandler() {
    s.files.map(f => console.log(f));
    setState({ ...s, step: 'toolsInUse' });
  }

  function checkMimeType(event) {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = '';
    // list allow mime type
    const types = ['image/png', 'image/jpeg', 'image/gif'];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every(type => files[x].type !== type)) {
        // create error message and assign to container
        err += files[x].type + ' is not a supported format\n';
      }
    }

    if (err !== '') {
      // if message not same old that mean has error
      event.target.value = null; // discard selected file
      console.log(err);
      return false;
    }
    return true;
  }

  function handleCheckBox(event) {
    const target = event.target;

    const tiu = target.checked
      ? s.toolsInUse.concat(target.name)
      : s.toolsInUse.filter(t => t.localeCompare(target.name));

    tiu.map(t => console.log(t));
    setState({ ...s, toolsInUse: tiu });
  }

  function conditionalRender(step, fragen, s) {
    switch (step) {
      case 'questions':
        return (
          <Card
            frage={fragen[s.current].frage}
            answers={fragen[s.current].answers}
            onAnswerSelected={inc}
          />
        );
      case 'upload':
        return (
          <div>
            <input
              type="file"
              onChange={fileSelectHandler}
              accept=".jpeg,.jpg,.png"
            />
            <div>
              {s.files.map(f => (
                <div>{f.name}</div>
              ))}
              <button onClick={fileSubmitHandler}>Sumbit</button>
            </div>
          </div>
        );
      case 'toolsInUse':
        return (
          <div>
            {tools.map(t => (
              <label>
                {t}
                <input name={t} type="checkbox" onChange={handleCheckBox} />
              </label>
            ))}
            <button
              onClick={() => {
                setState({ ...s, step: 'suggestions' });
              }}
            >
              Sumbit
            </button>
          </div>
        );
      case 'suggestions':
        return (
          <div>
            {' '}
            {s.files.map(i => (
              <img src={i} />
            ))}{' '}
          </div>
        );
      default:
        return <div>You should never see this</div>;
    }
  }

  return (
    <div className="frage">
      <div className="progress-bar">
        <div className="progress" style={{ width: progress + '%' }}>
          <small className="progress-number">
            {s.current + 1 + '/' + fragen.length}
          </small>
        </div>
      </div>
      <div className="question-pane">
        {conditionalRender(s.step, fragen, s)}
      </div>
    </div>
  );
}

export default Frage;
