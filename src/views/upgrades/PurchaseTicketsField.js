import React from 'react'
import {translate} from 'admin-on-rest'

const PurchaseTicketsField = ({basePath, showItems, record, resource, translate, locale}) => {

    return Array.isArray(record.tickets) ? 

        record.tickets.map(ticket => {

            const name = locale in ticket.names && ticket.names[locale].length ? ticket.names[locale] : ticket.names.en;

            const translatable = name && name.indexOf("resources.upgrades.") > -1 ? translate(`${name}.name`) : name;

            return <span key={ticket.id}>{`${ticket.quantity} ${translate("common.sales.pcs")} ${showItems ? translatable : ''}`}<br/></span>

        })
 : null
}

PurchaseTicketsField.defaultProps = {
    record : {
        tickets : []
    },
    addLabel : true,
    showItems : false
}  

export default translate(PurchaseTicketsField)
  