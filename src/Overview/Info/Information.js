import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

export function Information(props) {
  return (
    <Collapsible trigger={props.title} className="btn btn-answer">
      <div>{props.body()}</div>
    </Collapsible>
  );
}

Information.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.func.isRequired,
  bodyVisible: false
};
