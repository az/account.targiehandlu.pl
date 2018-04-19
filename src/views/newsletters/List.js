import React from 'react';

import * as Typo from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

import Creatives from './Creatives';
import { Card, CardTitle } from 'material-ui/Card';


const ViewList = props => (

  <Card>

    <Typo.PageTitle label="resources.newsletters.name" />

    <Creatives />

  </Card>


);

export default (ViewList);
