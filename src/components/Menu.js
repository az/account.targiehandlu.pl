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
//import Divider from 'material-ui/Divider';



import Modal from './Modal';
import Chatlio from '../services/Chatlio';
import menuItems from './menuItems'



const canBeShown = ( menuItemName ) => {

  const showableMenuItems = `${process.env.REACT_APP_MENU_ITEMS}`.trim()

  if(!showableMenuItems)
  {
    return true;
  }

  return showableMenuItems.split(",").indexOf(menuItemName) > -1

}

  //
  // //permission value is taken from PROMISE.resolve("value")
  // <WithPermission value="megakozak"></WithPermission>
  // <Divider />

const Menu = ({ resources, onMenuTap, logout, translate }) => (

  <div>

    <DashboardMenuItem onTouchTap={onMenuTap} />

    {
      menuItems.map((section, i) => <div key={i}><Subheader>{translate(`menu.sections.${section.name}`)}</Subheader>{
        section.items.map((item, j) => canBeShown(item.name) ? <MenuItemLink key={j}
          to={item.to}
          primaryText={ translate(item.label) }
          onClick={onMenuTap}
          leftIcon={item.icon}
        /> : null)}</div>)
    }

    {logout}

    <Modal />
    <Chatlio />

  </div>
);

const mapStateToProps = state => ({
  resources: getResources(state),
  locale: state.locale
});

const enhance = compose(
  connect(mapStateToProps),
  translate
);

export default enhance(Menu)
