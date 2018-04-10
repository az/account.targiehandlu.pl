import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField
} from 'admin-on-rest';


import ListActions from './Actions';

import VarLabelTextField from '../../fields/VarLabelTextField';
import MultiContentField from '../../fields/MultiContentField';



const ViewList = props => (

<List
    {...props}
    // title={<ViewTitle
    //         resource={props.resource}
    //
    //         limit={false}
    //       />}

    actions={<ListActions/>}
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

      <MultiContentField source="value" sortable={false} baseLabel={ function(record){

        if(record.name === "countries" || record.name === "keywords")
        {
          return `resources.companydata.fields.${record.name}_choices.`;
        }

        return false;

      } } />

      <TextField source="updated_at" sortable={false} />

      <EditButton />

    </Datagrid>
</List>
);

export default ViewList;
