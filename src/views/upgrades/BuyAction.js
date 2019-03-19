import React from 'react'
import {
    translate
} from 'admin-on-rest';
import RaisedButton from 'material-ui/RaisedButton';
import {Cart, Check, Cancel, Pencil} from 'mdi-material-ui'
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

        if("booked" in data && data.booked > 0){
        
            if(data.changeable){

                return  (<RaisedButton
                    primary
                    label={translate(`common.actions.modify`, {
                        smart_count : data.booked
                    })}
                    icon={<Pencil />}
                    onClick={this.handleClick}
                    />
                )

            }else{
                return  (<RaisedButton
                    disabled={true}
                    primary
                    disabledBackgroundColor="green"
                    disabledLabelColor="#cccccc"
                    label={translate(`common.statuses.already_bought`, {
                        smart_count : data.booked
                    })}
                    icon={<Check />}
                   
                    />
                )
            }
        }


        if("bookable" in data && data.bookable <= 0){

            return  (<RaisedButton
            disabled={true}
            primary
            label={translate(`common.statuses.unavailable`)}
            icon={<Cancel />}
          />)
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
    connect(null, {showModal})
)

export default enhance(BuyAction)