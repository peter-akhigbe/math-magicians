import './DisplayResult.css';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const DisplayResult = (props) => {
  const { value } = props;

  return <input type="number" value={value} readOnly />;
};

DisplayResult.propTypes = {
  value: PropTypes.string,
};

DisplayResult.defaultProps = {
  value: 'default value',
};

export default DisplayResult;
