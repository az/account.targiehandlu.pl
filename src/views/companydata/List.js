import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField
} from 'admin-on-rest';



import VarLabelTextField from '../../fields/VarLabelTextField';


const ViewList = props => (

<List
    {...props}
    //actions={<ListActions />}
      actions={null}
      //filters={<ViewFilter />}
      //sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid
      bodyOptions={{ stripedRows: true, showRowHover: true }}
    >

      <VarLabelTextField
        source="name"
        sortable={false}
      />

      <TextField source="value"  sortable={false} />

      <TextField source="updated_at" sortable={false} />

      <EditButton />

    </Datagrid>
</List>
);

export default ViewList;
