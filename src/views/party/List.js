import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  DeleteButton
} from 'admin-on-rest';




const ViewList = props => (

<List
    {...props}
    perPage={100}
  >
    <Datagrid
      bodyOptions={{ stripedRows: true, showRowHover: true }}
    >

      <TextField source="profile.fname"  sortable={false} />
      <TextField source="profile.lname"  sortable={false} />
      <TextField source="profile.position"  sortable={false} />
      <TextField source="profile.phone"  sortable={false} />


      <EditButton />
      <DeleteButton />

    </Datagrid>
</List>
);

export default ViewList;
