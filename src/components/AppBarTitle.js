import React from 'react';

import { getUserData, getCompanyName } from '../helpers';
//import Logout from './Logout';

class AppBarTitle extends React.Component {
  state = {
    value: ''
  };

  handleChange = () => {};

  render() {
    return (
      <div>
        {`${getUserData('profile.fname')} @ ${getCompanyName()} `}

        {/* <Logout icon /> */}
      </div>
    );
  }
}

export default AppBarTitle;
