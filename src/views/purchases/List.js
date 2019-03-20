
import React from 'react';
import { 
  List, 
  Datagrid, 
  Filter, 
  DateField, 
  TextInput 
} from 'admin-on-rest';

import ModifyPurchaseField from '../upgrades/ModifyPurchaseField'
import AmountField from '../upgrades/AmountField'
import PurchaseStatusField from '../upgrades/PurchaseStatusField'
import PurchaseTicketsField from '../upgrades/PurchaseTicketsField'

//import Actions from './ListActions';

const VisitorFilter = props => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn />
  </Filter>
);

const ViewList = props => (
  <List
    {...props}
    filters={<VisitorFilter />}
    sort={{ field: 'lname', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid>

      <DateField source="ts" label="Date" sortable={false} />
      <PurchaseTicketsField showItems={true} source="items" sortable={false} />
      <AmountField source="amount" sortable={false} />
      <PurchaseStatusField source="status" sortable={false} />
      <ModifyPurchaseField sortable={false} />

    </Datagrid>
  </List>
);

export default ViewList;
