import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { translate } from 'admin-on-rest';

import Contact from '../../components/Contact';

import {SectionTitle} from '../../components/Typography'

export default translate(({ style, translate }) => (

  <Card style={style}>
    <CardTitle
      title={translate('dashboard.welcome.title')}
      subtitle={translate('dashboard.welcome.subtitle')}
    />

    <CardText>{translate('dashboard.welcome.description')}</CardText>

    <div style={{margin: 10, paddingBottom: 50}}>

     {/* <SectionTitle label="tutorials.competition.title" />

       <iframe 
        width="800" 
        height="452" 
        src="https://www.youtube.com/embed/_H4bpaB7hbg" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen />


      <iframe 
        width="800" 
        height="452" 
        src="https://www.youtube.com/embed/fXWGJRPCz9g" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen />

      */}
        

      {/* <Contact /> */}
    </div>

  </Card>

));
