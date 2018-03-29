import React from 'react';

import { Heading, HeadingMargin, Subheading, Body, Border} from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';
import Divider from 'material-ui/Divider';

import {translate} from 'admin-on-rest';

import IconError from 'material-ui/svg-icons/alert/error';


const Shipment = ({translate}) => (

  <Wrapper>

    <Heading>
      {translate("informer.heading.shipment")}
    </Heading>

        <Border>
          EXPO Kraków
          <p>{translate("informer.body.describe")}</p>
          <p>Galicyjska 9</p>
          <p>31-586 Kraków{translate('informer.subheading.country')}</p>
        </Border>


    <Divider></Divider>

  <HeadingMargin>
    {translate("informer.heading.deliver")}
  </HeadingMargin>

    <Body>
      <ul>
        <li>{translate("informer.subheading.date.first")}</li>
        <li>{translate("informer.subheading.date.second")}</li>
      </ul>

        <IconError /> <mark>{translate("informer.subheading.deliver")}</mark>
    </Body>

    <Divider></Divider>


   <HeadingMargin>
      {translate("informer.heading.sped")}
   </HeadingMargin>

        <Subheading>
          {translate("informer.border.contact_person")}
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
