import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { translate } from 'admin-on-rest';

import Contact from '../../components/Contact';



export default translate(({ style, translate }) => (

  <Card style={style}>
    <CardTitle
      title={translate('dashboard.welcome.title')}
      subtitle={translate('dashboard.welcome.subtitle')}
    />

    <CardText>{translate('dashboard.welcome.description')}</CardText>

    <div style={{margin: 10, paddingBottom: 50}}>
      <Contact />
    </div>

  </Card>

));
