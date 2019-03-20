import React from 'react'
import {translate, refreshView} from 'admin-on-rest'
import RaisedButton from 'material-ui/RaisedButton';
import {Check, Cancel, Pencil} from 'mdi-material-ui';

import {connect} from 'react-redux'
import compose from 'recompose/compose'
import {purchaseUpdate} from '../../redux/actions';

class ModifyPurchaseField extends React.Component {

    handleClick = () => {

        const {purchaseUpdate, refreshView, basePath, record, locale} = this.props;

        purchaseUpdate(record.id, {
                quantity : 0,
                locale : locale,
                template : `${process.env.REACT_APP_UPGRADES_TEMPLATE}`,
                cc :  `${process.env.REACT_APP_UPGRADES_CC}`,
            },
            {...record},
            basePath
        );

        refreshView();
    }

    canBeModified(){

        const {record} = this.props;
        return record.status!=="new";
    }

    render(){

        const {translate, locale, record} = this.props;

        return  (<RaisedButton
            disabled={this.canBeModified()}
            primary
            label={translate(`common.actions.modify`)}
        //    icon={ this.canBeModified() ? <Pencil /> : <Cancel />}
            onClick={this.handleClick}
            />
        )


    }

} 

ModifyPurchaseField.defaultProps = {
    record : {}
}  

const enhance = compose(
    translate,
    connect(null, {purchaseUpdate, refreshView})
)

export default enhance(ModifyPurchaseField)
  