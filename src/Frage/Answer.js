import React from 'react';
import { checkPropTypes } from 'prop-types';

export function Answer(props) {
  return (
    <button
      className="btn btn-answer"
      onClick={() => props.onClicked(props.index)}
    >
      <span className="selected"></span>
      {props.answer}
    </button>
  );
}
