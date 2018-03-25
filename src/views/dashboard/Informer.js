import React from 'react';

import { translate } from 'admin-on-rest';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardTitle } from 'material-ui/Card';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Informer = ({translate}) => (

<Card style={{display: 'none'}}>
  <CardTitle
    title="Info dla Wystawców"
  />



  <Tabs>
    <Tab label={translate('informer.tabs.title_1')}>
      <div>
        <img
          src="https://d3vv6lp55qjaqc.cloudfront.net/items/0z2g1U1n3i0D05160B3n/Prezentacja%20bez%20tytułu%20(3).png"
        />
      </div>
    </Tab>

    <Tab label={translate('informer.tabs.title_2')} >
      <div>
        <img
          src="https://d3vv6lp55qjaqc.cloudfront.net/items/3u1I2J2X260A0Q0c3O28/Prezentacja%20bez%20tytułu.png"
        />
      </div>
    </Tab>

    <Tab label={translate('informer.tabs.title_3')} >
      <div>
        <img
          src="https://d3vv6lp55qjaqc.cloudfront.net/items/2d070g2Z212B0N2w1J0j/Prezentacja%20bez%20tytułu%20(1).png"
        />
      </div>
    </Tab>

  </Tabs>
</Card>

);

export default translate(Informer);
