import React from 'react'
import {
    translate
} from 'admin-on-rest';

const ConfirmationBox = ({translate, data}) => ( <div>{translate("common.thankyou")}</div>)

ConfirmationBox.defaultProps = {
    data : {}
}


export default translate(ConfirmationBox);