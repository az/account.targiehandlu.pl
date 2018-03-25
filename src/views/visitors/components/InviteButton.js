import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import get from 'lodash/get';
import { stringify } from 'query-string';

import FlatButton from 'material-ui/FlatButton';
import Icon from 'material-ui/svg-icons/editor/insert-invitation';

/*

basePath
limits
locale
record
resource
translate

*/
const InviteButton = ({
  basePath = '',
  limits,
  locale,
  record = {},
  resource,
  translate
}) =>
  get(limits, resource, true) ? (
    <FlatButton
      primary
      label={translate("resources.visitors.actions.invite")}
      icon={<Icon />}
      containerElement={
        <Link
          to={{
            pathname: `/meetups/create`,
            search: stringify({ participant_id: record.id })
            //search: stringify({ filter: JSON.stringify({ category_id: record.id }) }),
          }}
        />
      }
    />
  ) : (
    <FlatButton
      disabled
      label={translate('resources.visitors.actions.invite')}
      icon={<Icon />}
      //  onClick={()=>alert("asd")}
    />
  );

InviteButton.defaultProps = {
  // limit : false,
  // subtitle : false
};

const mapStateToProps = state => ({
  limits: state.resourcelimit
});

const enhance = compose(translate, connect(mapStateToProps, null));

export default enhance(InviteButton);
