
import React from 'react';
import {translate} from 'admin-on-rest'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {AlertCircle as IconAlert} from 'mdi-material-ui';
import {
  yellow50 as bgColor,
  red500 as iconColor,
} from 'material-ui/styles/colors';

const styles = {

  card : {
    boxShadow:'none',
    backgroundColor : bgColor,
    marginTop : 20,
    marginBottom : 20
  },

  secondary : {
    paddingLeft : 60
  }

}

const Important = ({translate, label, children}) => (

  <Card style={styles.card}><CardHeader
    avatar={<IconAlert color={iconColor} />}
    title={translate(label)}
  />{children ? <CardText style={styles.secondary}>{children}</CardText> : null}</Card>
)

Important.defaultProps = {
  label : "important"
}


export default translate(Important)
