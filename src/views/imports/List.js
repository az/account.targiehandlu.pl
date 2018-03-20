import React from 'react';
import { Datagrid, List, TextField } from 'admin-on-rest';

//import ListActions from './ListActions';
import FullNameField from '../../fields/FullNameField';
import ProgressField from '../../fields/ProgressField';

const ViewList = props => (
  <List
    {...props}
    //  actions={<ListActions />}
    perPage={200}
  >
    <Datagrid
      bodyOptions={{
        stripedRows: true,
        showRowHover: false
      }}
    >
      <TextField source="created_at" sortable={false} />
      <TextField source="name" sortable={false} />
      <TextField source="contactlist" sortable={false} />
      <ProgressField
        label="Imported"
        current="imported"
        target="submitted"
        sortable={false}
      />
      <FullNameField source="created_by" sortable={false} />
    </Datagrid>
  </List>
);

export default ViewList;
