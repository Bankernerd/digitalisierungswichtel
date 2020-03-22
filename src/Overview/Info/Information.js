import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import { Collapse } from './Collapse';

export function Information(props) {
  return <Collapse title={props.title} body={props.body()} />;
}

Information.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.func.isRequired,
  bodyVisible: false
};
