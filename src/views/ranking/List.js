import React from 'react';
import {
  translate,
  List,
  Datagrid,
  //  Filter,
  TextField
} from 'admin-on-rest';

import PointsField from './components/PointsField';
import ViewTitle from '../../components/ViewTitle';

// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = props => (
  <List
    title={<ViewTitle resource={props.resource} subtitle='resources.ranking.subtitle' />}
    {...props}
    //  filters={<VisitorFilter />}
    //  sort={{ field: 'lname', order: 'ASC' }}
    perPage={200}
  >
    <Datagrid
      //  headerOptions={{displaySelectAll: true, enableSelectAll : true}}
      //    bodyOptions={{ stripedRows: true, showRowHover: false, displayRowCheckbox: true }}
      //    rowOptions={{ selectable: true }}
      options={
        {
          //  multiSelectable: true,
          //  onRowSelection: test => console.log(test)
        }
      }
    >
      <PointsField source="stats" sortable={false} />
      <TextField source="profile.name" sortable={false} />
      <TextField source="slug" sortable={false} />

    </Datagrid>
  </List>
);

export default translate(ViewList);
