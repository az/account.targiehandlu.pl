import React from 'react';
import { Route } from 'react-router-dom';

import Configuration from '../views/configuration';
import Rewards from '../views/rewards';
import ScannerAuth from '../views/scans/Auth';
import Arrangement from '../views/logistics/Arrangement'
import Logistics from '../views/logistics'

export default [
  <Route exact path="/configuration" component={Configuration} />,
  <Route exact path="/rewards" component={Rewards} />,
  <Route exact path="/badgescanner" component={ScannerAuth} />,
  <Route exact path="/logistics" component={Logistics} />,
  <Route exact path="/logistics/arrangement" component={Arrangement} />

];
