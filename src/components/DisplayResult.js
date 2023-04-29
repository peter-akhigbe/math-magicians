import './DisplayResult.css';
import React from 'react';
import PropTypes from 'prop-types';

const DisplayResult = (props) => {
  const { value } = props;

  return <input type="text" value={value} readOnly />;
};

DisplayResult.propTypes = {
  value: PropTypes.string.isRequired,
};

export default DisplayResult;
