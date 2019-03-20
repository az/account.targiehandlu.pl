import React from 'react'
import {translate} from 'admin-on-rest'

const PurchaseTicketsField = ({basePath, showItems, record, resource, translate, locale}) => {

    return Array.isArray(record.tickets) ? 

        record.tickets.map(ticket => {

            const name = locale in ticket.names ? ticket.names[locale] : "";
            return <span key={ticket.id}>{`${showItems && name ? translate(name) : ''} ${ticket.quantity} ${translate("common.sales.pcs")}`}<br/></span>

        })
 : null
}

PurchaseTicketsField.defaultProps = {
    record : {},
    addLabel : true,
    showItems : false
}  

export default translate(PurchaseTicketsField)
  