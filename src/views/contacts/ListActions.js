import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import { CreateButton, translate } from 'admin-on-rest';

const inviteListActionsStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const InviteListActions = ({ basePath, data, refresh, translate }) => (
  <CardActions style={inviteListActionsStyle}>
    <CreateButton basePath="/imports" label="resources.contacts.actions.import" />

    <FlatButton
      primary
      label={translate("aor.action.refresh")}
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/* Add your custom actions

      <EditButton basePath={basePath} record={data} />
      <ListButton basePath={basePath} />
      <DeleteButton basePath={basePath} record={data} />

      <FlatButton primary label="Custom Action" onClick={customAction} />

        */}
  </CardActions>
);

export default translate(InviteListActions);
