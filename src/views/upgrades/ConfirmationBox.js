import React from 'react'
import {
    translate
} from 'admin-on-rest';
import {connect} from 'react-redux'
//import compose from 'recompose/compose'


const ConfirmationBox = ({translate, data}) => ( <div>{translate("common.thankyou")}</div>)

ConfirmationBox.defaultProps = {
    data : {}
}


export default connect(null, {translate})(ConfirmationBox)