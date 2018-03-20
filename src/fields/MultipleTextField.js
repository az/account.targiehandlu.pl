import React from 'react';
import pure from 'recompose/pure';
import get from 'lodash/get';

const MultipleTextField = ({ record = {}, sources = [] }) => {

  const txt = sources.map(source => get(record, source)).concat(" ")
  return (
    <span>{txt}</span>
  );
};

const PureMultipleTextField = pure(MultipleTextField);

export default PureMultipleTextField;
