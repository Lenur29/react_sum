// Don't forget to add default values an check types of props
import React from 'react';
import PropTypes from 'prop-types';

export function Sum(props) {
  return (
    <p>
      Sum of
      {' '}
      {props.a}
      {' '}
      and
      {' '}
      {props.b}
      {' '}
      is
      {' '}
      {props.a + props.b}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};