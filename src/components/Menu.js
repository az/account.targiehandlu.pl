import React from 'react';
import { connect } from 'react-redux';
import {
  MenuItemLink,
  getResources,
  translate,
  DashboardMenuItem,
  // WithPermission
} from 'admin-on-rest';
import compose from 'recompose/compose';

import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

//import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import IconPeople from 'material-ui/svg-icons/social/people';
import IconStatus from 'material-ui/svg-icons/action/today';
import IconTrend from 'material-ui/svg-icons/action/trending-up';
import IconShare from 'material-ui/svg-icons/av/volume-up';
// import IconRewards from 'material-ui/svg-icons/action/favorite';
import IconImports from 'material-ui/svg-icons/communication/contact-mail';
import IconLanguage from 'material-ui/svg-icons/action/language';

import Modal from './Modal';
import Chatlio from '../services/Chatlio';



const Menu = ({ resources, onMenuTap, logout, translate }) => (

  <div>
    <DashboardMenuItem onTouchTap={onMenuTap} />

    <Subheader>{translate("menu.sections.crucial")}</Subheader>

    <MenuItemLink
      to="/companydata"
      primaryText={translate('resources.companydata.name')}
      onClick={onMenuTap}
      leftIcon={<IconLanguage />}
      />

    <MenuItemLink
      to="/representatives"
      primaryText={translate('resources.representatives.name')}
      onClick={onMenuTap}
      leftIcon={<IconLanguage />}
      />


    <Subheader>{translate("menu.sections.promote")}</Subheader>

      <MenuItemLink
        to="/ranking"
        primaryText={translate('resources.ranking.menu')}
        onClick={onMenuTap}
        leftIcon={<IconTrend />}
      />



    <MenuItemLink
      to="/campaigns"
      primaryText={translate('resources.campaigns.menu')}
      onClick={onMenuTap}
      leftIcon={<ContentInbox />}
    />





       <MenuItemLink
        to="/contacts"
        primaryText={translate('resources.contacts.menu')}
        onClick={onMenuTap}
        leftIcon={<IconImports />}
      />
{/*
      <MenuItemLink
        to="/rewards"
        primaryText={translate('resources.rewards.menu')}
        onClick={onMenuTap}
        leftIcon={<IconRewards />}
      /> */}

      <MenuItemLink
        to="/creatives"
        primaryText={translate('resources.creatives.menu')}
        onClick={onMenuTap}
        leftIcon={<IconShare />}
      />

    <Subheader>{translate('menu.sections.suggest_a_meeting')}</Subheader>

      <MenuItemLink
        to="/visitors"
        primaryText={translate('resources.visitors.menu')}
        onClick={onMenuTap}
        leftIcon={<IconPeople />}
      />

      <MenuItemLink
        to="/meetups"
        primaryText={translate('resources.meetups.menu')}
        onClick={onMenuTap}
        leftIcon={<IconStatus />}
      />




    {/* <Subheader>{translate('menu.sections.leads')}</Subheader>

    <MenuItemLink
      to="/badgescannerinfo"
      primaryText={translate('resources.scans.menu')}
      onClick={onMenuTap}
      leftIcon={<IconTrend />}
    />

    <MenuItemLink
      to="/scans"
      primaryText={translate('resources.scans.menu')}
      onClick={onMenuTap}
      leftIcon={<IconTrend />}
    /> */}





  <Subheader>{translate('menu.sections.settings')}</Subheader>

    {/* <MenuItemLink
      to="/newsletters"
      primaryText={translate('resources.newsletters.menu')}
      onClick={onMenuTap}
      leftIcon={<IconTrend />}
    /> */}

    <Divider />


  {/*

  <WithPermission value="megakozak">


    </WithPermission>

*/}

    <Divider />

      <MenuItemLink
        to="/configuration"
        primaryText={translate('pos.configuration')}
        onClick={onMenuTap}
        leftIcon={<IconLanguage />}
        />



    {logout}

    <Modal />
    <Chatlio />

  </div>
);

const mapStateToProps = state => ({
  resources: getResources(state),
  //    resources : state.admin.resources,
  locale: state.locale
});

const enhance = compose(
  connect(mapStateToProps),
  translate
);

export default enhance(Menu)
