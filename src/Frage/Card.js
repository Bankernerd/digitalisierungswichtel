import React from 'react';

import { Answer } from './Answer';

export function Card(props) {
  return (
    <div className="card">
      <h2 className="question">{props.frage}</h2>
      <div className="answers">
        {props.answers.map(answer => (
          <Answer answer={answer} />
        ))}
      </div>
    </div>
  );
}
