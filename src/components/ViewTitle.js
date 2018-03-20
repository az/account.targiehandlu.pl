import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { CardTitle } from 'material-ui/Card';
import { translate } from 'admin-on-rest';
import get from 'lodash/get';

const Limit = props => {
  const resData = get(props.limits, props.resource, '...');

  const title = props.translate(`resources.${props.resource}.name`);

  const limit = props.limit
    ? props.translate(`resources.${props.resource}.limit`, { limit: resData })
    : '';

  return (
    <CardTitle
      style={{ padding: 0 }}
      title={title + limit}
      subtitle={
        props.limit || props.subtitle
          ? props.translate(`resources.${props.resource}.subtitle`)
          : null
      }
    />
  );
};

Limit.defaultProps = {
  limit: false,
  subtitle: false
};

const mapStateToProps = state => ({
  limits: state.resourcelimit
});

const enhance = compose(translate, connect(mapStateToProps, null));

export default enhance(Limit);
