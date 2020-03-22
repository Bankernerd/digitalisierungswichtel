import React from 'react';
import PropTypes from 'prop-types';
import { Answer } from './Answer';

export function Card(props) {
  return (
    <div className="card">
      <h2 className="question">{props.frage}</h2>
      <div className="answers">
        {props.answers.map(answer => (
          <Answer
            answer={answer}
            onClicked={props.onAnswerSelected}
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
