import React from 'react';
import PropTypes from 'prop-types';
import { Answer } from './Answer';

export function Card(props) {
  return (
    <div className="card">
      <h2 className="question">{props.frage}</h2>
      <div className="answers">
        {props.answers.map((answer, i) => (
          <Answer
            answer={answer}
            key={i}
            onClicked={props.onAnswerSelected}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  frage: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};
