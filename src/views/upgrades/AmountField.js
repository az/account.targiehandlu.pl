import React from 'react'
import {translate} from 'admin-on-rest'

const AmountField = ({basePath, record, resource, translate, locale}) => {

    return `${record.amount} ${locale==="pl" ? "PLN" : "EUR"} ${translate("common.sales.net")}` 
}

AmountField.defaultProps = {
    record : {},
    addLabel : true
}  

export default translate(AmountField)
  