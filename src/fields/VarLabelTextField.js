import React from 'react';
import {translate} from 'admin-on-rest'

const VarLabelTextField = props => {

  const {source, resource, record, translate} = props;

  return (
    <span>{translate(`resources.${resource}.customfields.${record[source]}`)}</span>
  )
}

export default translate(VarLabelTextField);
