import React from 'react'
import {translate} from 'admin-on-rest'

const PurchaseTicketsField = ({basePath, record, resource, translate, locale}) => {

    return Array.isArray(record.tickets) ? 

        record.tickets.map(ticket => <span key={ticket.id}>{`${ticket.quantity} ${translate("common.sales.pcs")}`}<br/></span>)
 : null
}

PurchaseTicketsField.defaultProps = {
    record : {},
    addLabel : true
}  

export default translate(PurchaseTicketsField)
  