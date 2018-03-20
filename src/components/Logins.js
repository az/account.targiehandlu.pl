import React from 'react';
import PropTypes from 'prop-types';

import { Notification } from 'admin-on-rest';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';

import styles from '../styles/landing';

//import LoginByPassword from './LoginByPassword';
//import LoginByRequest from './LoginByRequest';
import LoginByToken from './LoginByToken';

import { getColorsFromTheme } from '../api/helpers';

const Logins = props => {
  const { theme } = props;
  const muiTheme = getMuiTheme(theme);
  const { primary1Color, accent1Color } = getColorsFromTheme(muiTheme);

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={{ ...styles.main, backgroundColor: primary1Color }}>
        <Card style={(styles.card, styles.secondary)}>
          <div style={styles.avatar}>
            <Avatar
              backgroundColor={accent1Color}
              icon={<LockIcon />}
              size={80}
            />
          </div>

          <LoginByToken {...props} />

          {/*  <Tabs>
            <Tab label="I have a password">
              <LoginByPassword {...props} />
            </Tab>

            <Tab label="I don't have a password">
              <LoginByRequest {...props} />
            </Tab>
          </Tabs>

          */}
        </Card>

        <Notification />
      </div>
    </MuiThemeProvider>
  );
};

Logins.PropTypes = {
  theme: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired
};

Logins.defaultProps = {
  theme: {}
};

export default Logins;
