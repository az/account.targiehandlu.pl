import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {
    translate
} from 'admin-on-rest';
import {Cart, Check} from 'mdi-material-ui'
import {upgradeCreate} from '../../redux/actions';
import {connect} from 'react-redux'
import compose from 'recompose/compose'

class BuyAction extends React.Component {

    handleClick = () => {

        const {upgradeCreate, data} = this.props;

        upgradeCreate({
            ticket_id: data.id
        });

    }

    renderDisabled(reason){
        const {translate, resource} = this.props

        return  <RaisedButton
            disabled={true}
            primary
            label={translate(`common.statuses.${reason}`)}
            icon={<Check />}
           
          />
    }

    render(){

        const {translate, resource, data} = this.props

        if("bookable" in data && !data.bookable){
            return this.renderDisabled("unavailable");
        }

        if("booked" in data && data.booked){
            return this.renderDisabled("already_bought");
        }

        return (
            <RaisedButton
            primary
            label={translate(`common.actions.buy`)}
            icon={<Cart />}
            onClick={this.handleClick}
          />
        )
    }

}

BuyAction.defaultProps = {
    data : {}
}

const enhance = compose(
    translate,
    connect(null, {upgradeCreate})
)

export default enhance(BuyAction)