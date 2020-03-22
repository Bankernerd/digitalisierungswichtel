import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

export function Info(props) {
  return (
    <Collapsible trigger={props.title} className="btn btn-answer">
      <div>{props.body}</div>
    </Collapsible>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  bodyVisible: false
};
