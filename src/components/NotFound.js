import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';

export default () => (
  <Card>
    <ViewTitle title="Not Found" />
    <CardText>
      <h1>Checking permissions!</h1>
    </CardText>
  </Card>
);
