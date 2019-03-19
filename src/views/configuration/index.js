import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {
  translate,
  changeLocale as changeLocaleAction,
  ViewTitle
} from 'admin-on-rest';

import { withRouter } from 'react-router-dom';
import { Restricted } from 'admin-on-rest';
import compose from 'recompose/compose';

import { changeTheme as changeThemeAction } from '../../redux/actions';

const styles = {
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
};

const Configuration = ({
  theme,
  locale,
  locales,
  changeTheme,
  changeLocale,
  translate,
  location
}) => (
  <Restricted authParams={{ foo: 'bar' }} location={location}>
    <Card>
      <ViewTitle title={translate('pos.configuration')} />

      <CardText>
        <div style={styles.label}>{translate('pos.language')}</div>

        {
          locales.map(newLocale => <RaisedButton
            key={newLocale}
            style={styles.button}
            label={newLocale}
            primary={locale === newLocale}
            onClick={() => changeLocale(newLocale)}
          />)
        }

      
      </CardText>
    </Card>
  </Restricted>
);

Configuration.defaultProps = {
  locales : `${process.env.REACT_APP_LOCALES}`.split(",")
}

const mapStateToProps = state => ({
  theme: state.theme,
  locale: state.locale
});

const enhance = compose(
  translate,
  connect(mapStateToProps, {
    changeLocale: changeLocaleAction,
    changeTheme: changeThemeAction
  }),
  withRouter
);

export default enhance(Configuration);
