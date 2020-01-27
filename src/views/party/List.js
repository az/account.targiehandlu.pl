import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  DeleteButton
} from 'admin-on-rest';

import ViewTitle from '../../components/ViewTitle';

// const titleElement = (
//   <Title title={"asd"} defaultTitle={"dsa"} />
// );

const ViewList = props => (

<List
    {...props}
    perPage={100}
    title={<ViewTitle {...props} title="ssss" subtitle="ssss" />}
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
