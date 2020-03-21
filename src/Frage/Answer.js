import React from 'react';

export function Answer(props) {
  return (
    <button className="btn btn-answer">
      <span className="selected"></span>
      {props.answer}
    </button>
  );
}
