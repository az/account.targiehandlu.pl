import React from 'react';


//import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import IconStatus from 'material-ui/svg-icons/action/today';
import IconTrend from 'material-ui/svg-icons/action/trending-up';
import IconShare from 'material-ui/svg-icons/av/volume-up';
import IconRewards from 'material-ui/svg-icons/action/favorite';
import IconImports from 'material-ui/svg-icons/communication/contact-mail';
import IconLanguage from 'material-ui/svg-icons/action/language';
import IconSetting from 'material-ui/svg-icons/action/settings';
import IconBuild from 'material-ui/svg-icons/action/build';
import IconCart from 'material-ui/svg-icons/action/shopping-cart';

import {
  PackageVariantClosed as IconLogistics,
  AccountMultiple as IconPeople
} from 'mdi-material-ui'

export const getSectionItemNames = (section) => section.items.map(item => item.name)


const menuItems = [

  { name : "crucial",
    items : [{
      name : "companydata",
      label : "resources.companydata.menu",
      icon : <IconSetting />
    },
    {
      name : "purchases",
      label : "resources.purchases.menu",
      icon : <IconCart />
    },
    {
      name : "upgrades",
      label : "resources.upgrades.menu",
      icon : <IconBuild />
    },
    {
      name : "logistics",
      label : "resources.logistics.menu",
      icon : <IconLogistics />
    },{
      name : "representatives",
      label : "resources.representatives.menu",
      icon : <IconPeople />
    }
  ]},
  {
    name : "promote",
    items : [
      
    // {
    //   name : "ranking",
    //   label : "resources.ranking.menu",
    //   icon : <IconTrend />
    // },
    {
      name : "campaigns",
      label : "resources.campaigns.menu",
      icon : <ContentInbox />
    },
    {
      name : "contacts",
      label : "resources.contacts.menu",
      icon : <IconImports />
    },
    {
      name : "rewards",
      label : "resources.rewards.menu",
      icon : <IconRewards />
    },
    {
      name : "newsletters",
      label : "resources.newsletters.menu",
      icon : <IconTrend />
    },
    {
      name : "creatives",
      label : "resources.creatives.menu",
      icon : <IconShare />
    },
  ]},{
    name : "suggest_a_meeting",
    items : [
      {
        name : "visitors",
        label : "resources.visitors.menu",
        icon : <IconPeople />
      },
      {
        name : "meetups",
        label : "resources.meetups.menu",
        icon : <IconStatus />
      },

  ]},{
    name : "leads",
    items : [
      {
        name : "badgescanner",
        label : "resources.scans.menu",
        icon : <IconTrend />
      },
      {
        name : "scans",
        label : "resources.scans.menu",
        icon : <IconTrend />
      }
    ]
  },
  {
    name : "settings",
    items : [
    {
        name : "configuration",
        label : "pos.configuration",
        icon : <IconLanguage />
      }
    ]
  }

];




export default menuItems;
