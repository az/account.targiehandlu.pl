import React from 'react';

import { translate } from 'admin-on-rest';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card } from 'material-ui/Card';



import ExhibitionSpace from './components/ExhibitionSpace';
import Shipment from './components/Shipment';
import Assembly from './components/Assembly';
import Title from './components/Title';



const Informer = ({translate, Heading }) => (



<Card>

  <Title />

  {/* <CardTitle
    title= "Info dla Wystawców"
  /> */}

  <Tabs>
    <Tab label={translate('informer.tabs.basic')}>
      <div>
        <ExhibitionSpace />
      </div>
    </Tab>

    <Tab label={translate('informer.tabs.shipment')} >
      <div>
        <Shipment />
      </div>
    </Tab>

    <Tab label={translate('informer.tabs.assembly')} >
      <div>
        <Assembly />
      </div>
    </Tab>

  </Tabs>


</Card>



);

export default translate(Informer);
