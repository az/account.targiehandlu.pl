import React from 'react'
import {translate} from 'admin-on-rest'
import get from 'lodash/get';


const CustomField = ({basePath, record, resource, translate, locale}) => {
  
    const specs = translate( `${get(record, `names.${locale}`)}.specs` ) 

    return (
   <div>

        <ul>
        <li>{translate("common.sales.ends")}: {record.end}</li>
        <li>{translate("common.sales.remaining")}: {record.remaining}</li>
        </ul>

        <p style={{marginTop : 10, marginBottom: 10}}>
            
            { translate( `${get(record, `names.${locale}`)}.description` ) }

        </p>
            
        { specs ? <p style={{
            backgroundColor : 'lightyellow',
            marginTop : 20, 
            marginBottom: 20,
            padding: 10
        }}> {specs} </p> : null}

       


   </div>
)}


CustomField.defaultProps = {
    record : {}
}  

export default translate(CustomField)
  