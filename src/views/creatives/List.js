

import React from 'react';
import * as Typo from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

import Creatives from './Creatives';
import { Card, CardTitle } from 'material-ui/Card';

// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = props => (

  <Card>

    <Typo.PageTitle label="resources.creatives.heading" />

    <Creatives />

  </Card>
);

export default ViewList;
