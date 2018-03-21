import React from 'react';
import { List, Datagrid, Filter, TextField, TextInput } from 'admin-on-rest';

import InviteButton from './components/InviteButton';

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
    perPage={50}
  >
    <Datagrid
      //  headerOptions={{displaySelectAll: true, enableSelectAll : true}}
      bodyOptions={{
        stripedRows: true
        // showRowHover: false,
        //   displayRowCheckbox: true
      }}
      //    rowOptions={{ selectable: true }}
      options={
        {
          // multiSelectable: true,
          // onRowSelection: test => console.log(test)
        }
      }
    >
      <TextField source="profile.fname"  sortable={false} />
      <TextField source="profile.lname"  sortable={false} />
      <TextField source="profile.cname2" sortable={false} />
      <TextField source="profile.position" sortable={false} />
      {/* <TextField source="profile.domain" sortable={false} /> */}

      <InviteButton />
    </Datagrid>
  </List>
);

export default ViewList;
