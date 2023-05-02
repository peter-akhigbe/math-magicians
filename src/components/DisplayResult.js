import React from 'react';
import PropTypes from 'prop-types';

const DisplayResult = (props) => {
  const { value } = props;

  const inputStyles = {
    width: '100%',
    height: '60px',
    backgroundColor: 'grey',
    textAlign: 'right',
    color: 'white',
    fontWeight: '900',
    border: '10px solid transparent',
    boxSizing: 'border-box',
  };

  return <input style={inputStyles} type="text" value={value} readOnly />;
};

DisplayResult.propTypes = {
  value: PropTypes.string.isRequired,
};

export default DisplayResult;
