import React from 'react';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Card } from 'material-ui/Card';
import { Subheading } from './Typography';

import { translate } from 'admin-on-rest';

import IconMail from 'material-ui/svg-icons/communication/email';
import IconPhone from 'material-ui/svg-icons/communication/phone';
// import IcoPhone from 'mdi-material-ui/microphone'


const Contact = ({translate}) => (

  <Card>

    <List>
      <ListItem>
      <Subheading>
        <b>Potrzebujesz więcej informacji?</b> Skontaktuj się z nami mailowo lub telefonicznie!

          <p><IconMail />  <a href="mailto:targiehandlu@targiehandlu.com.pl">targiehandlu@targiehandlu.com.pl</a></p>

          <p><IconPhone />  +48 721 945 134</p>
      </Subheading>
    </ListItem>

    </List>

  </Card>

);

export default translate(Contact);
