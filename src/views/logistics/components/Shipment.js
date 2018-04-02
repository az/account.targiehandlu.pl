import React from 'react';

import { Heading, HeadingMargin, Subheading, Body, Border} from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';
import Divider from 'material-ui/Divider';

import {translate} from 'admin-on-rest';

import IconError from 'material-ui/svg-icons/alert/error';


const Shipment = ({translate}) => (

  <Wrapper>

    <Heading>
      {translate("informer.shipment.address")}
    </Heading>

        <Border>
          EXPO Kraków
          <p>{translate("informer.shipment.describe")}</p>
          <p>Galicyjska 9</p>
          <p>31-586 Kraków{translate('informer.shipment.country')}</p>
        </Border>


    <Divider></Divider>

  <HeadingMargin>
    {translate("informer.shipment.deliver_hours")}
  </HeadingMargin>

    <Body>
      <ul>
        <li>{translate("informer.shipment.date.april24")}</li>
        <li>{translate("informer.shipment.date.april25")}</li>
      </ul>

        <IconError /> <mark>{translate("informer.shipment.deliver")}</mark>
    </Body>

    <Divider></Divider>


   <HeadingMargin>
      {translate("informer.shipment.sped")}
   </HeadingMargin>

        <Subheading>
          {translate("informer.shipment.contact_person")}
        </Subheading>

        <Border>
          Marcin Frontczak
          <p>e-mail: <a href="mailto:marcin@transmeble.com.pl">marcin@transmeble.com.pl</a></p>
          <p>tel.: + 48 61 865 68 07</p>
          <p>tel. kom.: +48 501 710 984</p>
          <p><a href="http://www.transmeble.com.pl/">www.transmeble.com.pl</a></p>
        </Border>


  </Wrapper>

);

export default translate(Shipment);
