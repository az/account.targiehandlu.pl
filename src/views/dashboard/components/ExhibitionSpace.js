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
    {translate("informer.heading.exhibition_space")}
  </Heading>

    <Subheading>
      {translate("informer.subheading.area")}
    </Subheading>

      <Body>
        <ul>
          <li>{translate("informer.body.area_1")}</li>
          <li>{translate("informer.body.area_2")}</li>
        </ul>
      </Body>


    <Subheading>{
      translate("informer.subheading.equipment")}
    </Subheading>

      <Body>
        <ul>
          <li>{translate("informer.body.equipment.hocker")}</li>
          <li>{translate("informer.body.equipment.table")}</li>
          <li>{translate("informer.body.equipment.voucher")}</li>
          <li>{translate("informer.body.equipment.wifi")}</li>
          <li>{translate("informer.body.equipment.electricity")}</li>
        </ul>

        <IconError /> <mark>{translate("informer.subheading.backwall")}</mark>
      </Body>




  <Divider></Divider>

  <HeadingMargin>
    {translate("informer.heading.add_equipment")}
  </HeadingMargin>

    <Body>
      <ul>
        <li>{translate("informer.subheading.carpeting")}<a href="mailto:targiehandlu@targiehandlu.com.pl">targiehandlu@targiehandlu.com.pl</a></li>
        <li>{translate("informer.subheading.add_equipment")}</li>
        <li><a href="https://admin.targiehandlu.pl/zabudowa" target="_blank">{translate("informer.subheading.see")}</a>{translate("informer.subheading.construction")}<a href="mailto:joanna.bartoszewicz@allinevent.pl">joanna.bartoszewicz@allinevent.pl</a></li>
      </ul>
    </Body>

    <Divider></Divider>

  <HeadingMargin>
    {translate("informer.heading.representative")}
  </HeadingMargin>

    <Body>
      {translate("informer.body.reps_info")}<Link to={{ pathname: '/representatives' }}>
      {translate('resources.representatives.name')}</Link>.
    </Body>

</Wrapper>





);

export default translate(ExhibitionSpace);
