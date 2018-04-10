import React from 'react';
import {translate} from 'admin-on-rest'

const VarLabelTextField = props => {

  const {source, resource, record, translate, baseLabel, style, translateKey} = props;

  return (
    <div style={style}>{translate(`resources.${resource}.${baseLabel}.${record[source]}.${translateKey}`)}</div>
  )
}

VarLabelTextField.defaultProps = {
  baseLabel : "customfields",
  translateKey : "name",
  style : {}
}

export default translate(VarLabelTextField);
