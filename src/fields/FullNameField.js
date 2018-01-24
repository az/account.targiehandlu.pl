import React from 'react';
import pure from 'recompose/pure';
import get from 'lodash/get';

const FullNameField = ({ record = {}, source, size = 25 }) => {
  const _source = source ? `${source}.` : "";
  return   (
    <span>
      {get(record, _source+"fname")} {get(record, _source+"lname")}
    </span>
  );
}


const PureFullNameField = pure(FullNameField);

PureFullNameField.defaultProps = {
  source: 'email',
  label: 'resources.customers.fields.name'
};

export default FullNameField;
