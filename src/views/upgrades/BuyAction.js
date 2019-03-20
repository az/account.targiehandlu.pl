import React from 'react'
import {
    translate
} from 'admin-on-rest';
import RaisedButton from 'material-ui/RaisedButton';
import {Cart} from 'mdi-material-ui'
import {connect} from 'react-redux'
import compose from 'recompose/compose'
import {showModal} from '../../redux/actions';
import QuantityBox from './QuantityBox'

class BuyAction extends React.Component {

    handleClick = () => {

        const {showModal, data, translate} = this.props;

        showModal({
            title: translate("resources.upgrades.dialog"),
            body: <QuantityBox data={data} />,
        })

    }

    render(){

        const {translate, data} = this.props    

        if("bookable" in data && data.bookable > 0){
                
            return  (<RaisedButton
                primary
                label={
                    ("booked" in data && data.booked > 0) ? 
                    translate(`common.statuses.buy_more`) :
                    translate(`common.statuses.buy`)
                }
                icon={<Cart />}
                onClick={this.handleClick}
                />
            )

        }
        else{
            
            return  (<RaisedButton
                disabled={true}
                primary
                label={translate(`common.statuses.unavailable`)}
                icon={<Cart />}
              />)
            
        }

    }

}

BuyAction.defaultProps = {
    data : {}
}

const enhance = compose(
    translate,
    connect(null, {showModal})
)

export default enhance(BuyAction)