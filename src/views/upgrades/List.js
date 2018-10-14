import React from 'react';
import {
  List
} from 'admin-on-rest';

import ListActions from './ShowActions';
import CustomIterator from './CustomIterator'

const ViewList = props => (

<List
    {...props}
  //  actions={<ListActions/>}
    perPage={100}
  >
    <CustomIterator />

</List>
);

export default ViewList;
