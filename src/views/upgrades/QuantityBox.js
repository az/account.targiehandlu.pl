import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {
    translate,
    refreshView
} from 'admin-on-rest';
import {Cart, Check} from 'mdi-material-ui'
import SelectField from 'material-ui/SelectField'; 
//https://v0.material-ui.com/#/components/select-field
import MenuItem from 'material-ui/MenuItem'; 

import {connect} from 'react-redux'
import compose from 'recompose/compose'
import {purchaseCreate} from '../../redux/actions';


class QuantityBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { itemsCount: 1};
    }

    renderItemsCountSelect(){

        const {data, translate} = this.props;

        const {itemsCount} = this.state;

        return (
            <SelectField
            floatingLabelText={translate('common.actions.quantity')}
            value={itemsCount}
            onChange={this.handleChange}
          >
            {[...Array(data.bookable+1).keys()].map( item => (
              <MenuItem
                key={item}
                value={item}
                primaryText={`${item} ${translate('common.sales.pcs')}`}
              />
            ))}
          </SelectField>
        )

    }

    handleChange = (event, index, value) => this.setState({itemsCount : value})

    handleBuy = () => {

        const {purchaseCreate, data, locale, refreshView} = this.props;
        const {itemsCount} = this.state;

        purchaseCreate({
            ticket_id: data.id,
            locale : locale,
            quantity : itemsCount,
            template : `${process.env.REACT_APP_UPGRADES_TEMPLATE}`,
            cc :  `${process.env.REACT_APP_UPGRADES_CC}`,
        });

        refreshView();

    }

    renderTotal(){

        const {data, locale} = this.props
        const {itemsCount} = this.state;
        const total = data.price.pl * itemsCount;

        if(locale === "pl"){
            return `${total} PLN`;
        }
        else
        {
            return `${total} EUR`;
        }
    }

    render(){

        const {translate, resource, data} = this.props
        const {itemsCount} = this.state;

        return (
        
            <div>
            <div>
                { this.renderItemsCountSelect() }
            </div>
            <div style={{marginTop: 20}}>
                { this.renderTotal() } {` `} {translate('common.sales.net')}
            </div>
            <div style={{marginTop: 20}}>
                <RaisedButton
                primary
                disabled={itemsCount > 0 ? false : true}
                label={translate(`common.actions.buy`)}
                icon={<Cart />}
                onClick={this.handleBuy}
                />
            </div>
            </div>
        )
    }

}

QuantityBox.defaultProps = {
    data : {}
}

const enhance = compose(
    translate,
    connect(null, {purchaseCreate, refreshView})
)

export default enhance(QuantityBox)