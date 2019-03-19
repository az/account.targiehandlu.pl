
import React from 'react';
import {Card, CardHeader, CardTitle, CardActions, CardMedia, CardText} from 'material-ui/Card';
import {translate} from 'admin-on-rest';
import get from 'lodash/get'
 
import {Check as Icon} from 'mdi-material-ui'
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import {  
    ShowButton,
    linkToRecord
} from 'admin-on-rest'

const cardStyle = {
    cursor: 'pointer',
    width: '30%',
    minHeight: 230,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};




const CustomIterator = ({ ids, data, basePath, locale, translate, push }) => (

    <div style={{ margin: '1em' }}>
    {ids.map(id => {

        return (
            <Card key={id} style={cardStyle} onClick={() => push(`${basePath}/${get(data[id], "id")}/show`)}>

            <CardTitle 
                title={
                   translate( `${get(data[id], `names.${locale}`)}.name` )
                } 
                // subtitle={
                //    translate( `${data[id].names[locale]}.description` )
                // }
            />

            <div style={{position : 'relative'}}>
                <CardMedia 
                overlay={
                <CardTitle 
                    title={
                        data[id].bookable > 0  ? 
                        `${ get(data[id], `price.${locale}`) } ${locale==="pl" ? "PLN" : "EUR"} ${translate("common.sales.net")}` : 
                        `${translate("common.statuses.unavailable")}`
                    } 
                    subtitle={
                        `
                        ${translate("common.sales.ends")}: ${data[id].end}
                        ${translate("common.sales.remaining")}: ${data[id].remaining} 
                        `
                    }
                />
                }
                style={{
                    backgroundImage : `url(${get(data[id], `thumbnail`, "")})`,
                    backgroundSize: 'cover',
                    backgroundPosition : 'center center',
                    backgroundRepeat : 'no-repeat',
                    height : 270,
                }}
            />
            <div style={{
                position : 'absolute', 
                zIndex : 2,
                top: 0, 
                left : 0,
                display:'flex',
                width : '100%',
                height : '100%',
                alignItems : 'center',
                justifyContent : 'center'
                }}>
                
                {data[id].booked ? <Icon style={{
                    width: 200,
                    height : 200,
                    color : 'limegreen'
                    }}/> : null }
                
                </div>
            </div>
         
            <CardText>
              
            </CardText>
          
            <CardActions style={{ textAlign: 'right' }}>
                {/* <ItemStatusField record={data[id]} source="booked" /> */}
                <ShowButton resource="posts" basePath={basePath} record={data[id]} label="resources.upgrades.actions.details" />
            </CardActions>
        </Card>
        )
    }

       
    )}
    </div>
);

CustomIterator.defaultProps = {
    data: {},
    ids: [],
};


const enhance = compose(
    translate,
    connect(null, {push})
)

export default enhance(CustomIterator)