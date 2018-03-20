import React from 'react';
import { Datagrid, List, TextField } from 'admin-on-rest';
//
// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = props => (
  <List
    {...props}
    // filters={<VisitorFilter />}
    sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid
      //  headerOptions={{ adjustForCheckbox: true, displaySelectAll: true }}
      bodyOptions={{
        // stripedRows: true,
        // showRowHover: false,
        // displayRowCheckbox: true
      }}
      rowOptions={{
        // selectable: true
      }}
      options={{
        // multiSelectable: true,
        // onRowSelection: test => console.log(test)
      }}
    >
      <TextField source="fname" />
      <TextField source="lname" />
      <TextField source="cname2" />
      <TextField source="position" />
    </Datagrid>
  </List>
);

export default ViewList;
