import React from 'react'
import { translate } from 'admin-on-rest';
import { Link } from 'react-router-dom';




const Requirements = ({data, translate, label, baseLabel}) => {

  return (

    <span>
      {`${ translate(label) } `}


      {data.map((item, idx) => <strong style={{marginRight: 10}}>{
        translate(`${baseLabel}.${item}.name`)
      }</strong>)}
      {` `}
      <Link to={{ pathname: '/companydata' }}>{translate('aor.action.edit')}</Link>

    </span>

  )

}


Requirements.defaultProps = {
  label : "",
  data : [],
  baseLabel : 'resources.companydata.customfields'
}


export default translate(Requirements)
