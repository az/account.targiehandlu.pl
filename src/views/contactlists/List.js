import React from 'react';
import {
  Datagrid,
  Filter,
  List,
  TextInput,
  TextField,
  NumberField,
} from 'admin-on-rest';

import FullNameField from '../../fields/FullNameField';

const VisitorFilter = props => (
  <Filter {...props}>
    <TextInput label="pos.search" source="q" alwaysOn />
  </Filter>
);

const ViewList = props => (
  <List
    {...props}
    filters={<VisitorFilter />}
    sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid
      //  headerOptions={{ adjustForCheckbox: true, displaySelectAll: true }}
      bodyOptions={{
        stripedRows: true,
        showRowHover: false
        //  displayRowCheckbox: true
      }}
      rowOptions={
        {
          //  selectable: true
        }
      }
      options={
        {
          //  multiSelectable: true,
          //  onRowSelection: test => console.log(test)
        }
      }
    >
      <TextField source="name" sortable={false} />
      <NumberField source="submitted" sortable={false} />
      <NumberField source="imported" sortable={false} />
      <TextField source="created_at" sortable={false} />
      <FullNameField source="admin.profile" sortable={false} />
    </Datagrid>
  </List>
);

export default ViewList;
