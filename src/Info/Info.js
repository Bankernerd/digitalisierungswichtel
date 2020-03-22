import React from 'react';
import PropTypes from 'prop-types';

export function Info(props) {
  return (
    <div className="info">
      <span>{props.title}</span>
      <span>{props.body}</span>
    </div>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
