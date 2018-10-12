import React from 'react'
import {translate} from 'admin-on-rest'
import get from 'lodash/get';


const CustomField = ({basePath, record, resource, translate, locale}) => {
  
    return (
   <div>

        <p style={{marginTop : 10, marginBottom: 10}}>
            
            { translate( `${get(record, `names.${locale}`)}.description` ) }

        </p>

   </div>
)}


CustomField.defaultProps = {
    record : {}
}  

export default translate(CustomField)
  