import React from 'react';


//import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import IconPeople from 'material-ui/svg-icons/social/people';
import IconStatus from 'material-ui/svg-icons/action/today';
import IconTrend from 'material-ui/svg-icons/action/trending-up';
import IconShare from 'material-ui/svg-icons/av/volume-up';
import IconRewards from 'material-ui/svg-icons/action/favorite';
import IconImports from 'material-ui/svg-icons/communication/contact-mail';
import IconLanguage from 'material-ui/svg-icons/action/language';
import IconSetting from 'material-ui/svg-icons/action/settings';




const menuItems = [

  { name : "crucial",
    items : [{

      name : "companydata",
      to : "/companydata",
      label : "resources.companydata.menu",
      icon : <IconSetting />
    },{

      name : "representatives",
      to : "/representatives",
      label : "resources.representatives.menu",
      icon : <IconSetting />

    }
  ]},
  {
    name : "promote",
    items : [{
      name : "ranking",
      to : "/ranking",
      label : "resources.ranking.menu",
      icon : <IconTrend />
    },
    {
      name : "campaigns",
      to : "/campaigns",
      label : "resources.campaigns.menu",
      icon : <ContentInbox />
    },
    {
      name : "contacts",
      to : "/contacts",
      label : "resources.contacts.menu",
      icon : <IconImports />
    },
    {
      name : "rewards",
      to : "/rewards",
      label : "resources.rewards.menu",
      icon : <IconRewards />
    },
    {
      name : "creatives",
      to : "/creatives",
      label : "resources.creatives.menu",
      icon : <IconShare />
    },
  ]},{
    name : "suggest_a_meeting",
    items : [
      {
        name : "visitors",
        to : "/visitors",
        label : "resources.visitors.menu",
        icon : <IconPeople />
      },
      {
        name : "meetups",
        to : "/meetups",
        label : "resources.meetups.menu",
        icon : <IconStatus />
      },

  ]},{
    name : "leads",
    items : [
      {
        name : "scans",
        to : "/badgescanner",
        label : "resources.scans.menu",
        icon : <IconTrend />
      },
      {
        name : "scans",
        to : "/scans",
        label : "resources.scans.menu",
        icon : <IconTrend />
      }
    ]
  },
  {
    name : "settings",
    items : [
      {
        name : "newsletters",
        to : "/newsletters",
        label : "resources.newsletters.menu",
        icon : <IconTrend />
      },{
        name : "configuration",
        to : "/configuration",
        label : "pos.configuration",
        icon : <IconLanguage />
      }
    ]
  }

];



export default menuItems;
