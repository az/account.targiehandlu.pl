import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'admin-on-rest';

import { Card } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';


//import LoginByPassword from './LoginByPassword';
//import LoginByRequest from './LoginByRequest';
import LoginByToken from './LoginByToken';


import styles from '../styles/landing';
import { getColorsFromTheme, Provider } from '../styles/muiTheme';


const Logins = props => {

  const { theme } = props;
  const { accent1Color } = getColorsFromTheme();

  return (
    <Provider muiTheme={theme}>
      <div style={{ ...styles.main, backgroundColor: accent1Color }}>
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
    </Provider>
  );
};

Logins.propTypes = {
  theme: PropTypes.object.isRequired,
//  translate: PropTypes.func.isRequired
};

Logins.defaultProps = {
  theme: {}
};

export default Logins;
