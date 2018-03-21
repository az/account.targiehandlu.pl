import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import {
  showNotification as showNotificationAction,
  translate,
  userLogin as userLoginAction
} from 'admin-on-rest';
import qs from 'query-string';
import get from 'lodash/get';
import styles from '../styles/landing';
import { validateToken } from '../api/helpers';

class LoginByToken extends Component {
  state = {
    token: ''
  };

  componentDidMount = () => {
    const { userLogin, location, showNotification } = this.props;

    const token = get(qs.parse(location.search), 'token', '');

    if (token.length) {
      if (validateToken(token)) {
        this.setState({ token: token });

        userLogin({ token: token }, '/');
      } else {
        showNotification('auth.errors.badtoken');
      }
    }
  };

  render() {
    const { translate } = this.props;
    return (
      <div style={styles.form}>
        <h2 style={styles.centered}>{translate('auth.unauthorized')}</h2>

        <p style={styles.centered}>
          {translate("auth.support")}
        </p>
      </div>
    );
  }
}

const enhance = compose(
  translate,
  connect(null, {
    userLogin: userLoginAction,
    showNotification: showNotificationAction
  })
);

export default enhance(LoginByToken);
