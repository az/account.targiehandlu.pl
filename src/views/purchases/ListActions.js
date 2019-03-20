import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import { ListButton, EditButton, DeleteButton } from 'admin-on-rest';

const inviteListActionsStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({ basePath, data, refresh }) => (
  <CardActions style={inviteListActionsStyle}>
    <EditButton basePath={basePath} record={data} />
    <ListButton basePath={basePath} />
    <DeleteButton basePath={basePath} record={data} />
    <FlatButton
      primary
      label="aor.action.refresh"
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/* Add your custom actions */}
    <FlatButton
      primary
      label="Custom Action"
      onClick={test => console.log(test)}
    />
  </CardActions>
);

export default Actions;
