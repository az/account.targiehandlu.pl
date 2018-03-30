import React from 'react';

import { Heading, HeadingMargin, Subheading, Body, Border } from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';
import Divider from 'material-ui/Divider';

import { Link } from 'react-router-dom';

import IconError from 'material-ui/svg-icons/alert/error';

import {translate} from 'admin-on-rest';



const ExhibitionSpace = ({translate, style}) => (
<Wrapper>

  <Heading>
    {translate("informer.basic.exhibition_space")}
  </Heading>

    <Subheading>
      {translate("informer.basic.area")}
    </Subheading>

      <Body>
        <ul>
          <li>{translate("informer.basic.stand_options.standard")}</li>
          <li>{translate("informer.basic.stand_options.grand")}</li>
        </ul>
      </Body>


    <Subheading>{
      translate("informer.basic.equipment")}
    </Subheading>

      <Body>
        <ul>
          <li>{translate("informer.basic.equipment_options.hocker")}</li>
          <li>{translate("informer.basic.equipment_options.table")}</li>
          <li>{translate("informer.basic.equipment_options.voucher")}</li>
          <li>{translate("informer.basic.equipment_options.wifi")}</li>
          <li>{translate("informer.basic.equipment_options.electricity")}</li>
        </ul>

        <IconError /> <mark>{translate("informer.basic.backwall")}</mark>
      </Body>




  <Divider></Divider>

  <HeadingMargin>
    {translate("informer.basic.add_equipment")}
  </HeadingMargin>

    <Body>

      <ul>
        <li>{translate("informer.basic.carpeting")}<a href="mailto:targiehandlu@targiehandlu.com.pl">targiehandlu@targiehandlu.com.pl</a></li>
      </ul>

      <p></p>

      <ul>
        <li>{translate("informer.basic.add_eq_contact")}</li>
      </ul>

      <p></p>

      <ul>
        <li><a href="https://admin.targiehandlu.pl/zabudowa" target="_blank">{translate("informer.basic.see")}</a>{translate("informer.basic.construction")}<a href="mailto:joanna.bartoszewicz@allinevent.pl">joanna.bartoszewicz@allinevent.pl</a></li>
      </ul>

    </Body>

    <Divider></Divider>

  <HeadingMargin>
    {translate("informer.basic.representative")}
  </HeadingMargin>

    <Body>
      {translate("informer.basic.reps_info")}<Link to={{ pathname: '/representatives' }}>
      {translate('informer.basic.representative')}</Link>.
    </Body>

</Wrapper>





);

export default translate(ExhibitionSpace);
