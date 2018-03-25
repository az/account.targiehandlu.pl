import React from 'react';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Card } from 'material-ui/Card';

import { translate } from 'admin-on-rest';


const Contact = ({translate}) => (

  <Card>
    <List>
      <ListItem
        disabled={true}
        leftAvatar={
          <Avatar src="https://d3vv6lp55qjaqc.cloudfront.net/items/1x2X1e340Y2S0I2b2u2G/23627468_1656964947687397_924271866_o%20(1).jpg" />
        }
      >
        <b>Potrzebujesz więcej informacji?</b> Skontaktuj się ze mną mailowo lub telefonicznie!
        <ul>
          <li>email: bartosz.meller@targiehandlu.com.pl</li>
          <li>tel: +48 721 945 134</li>
        </ul>
      </ListItem>
    </List>
  </Card>

);

export default translate(Contact);
