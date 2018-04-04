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


const translatable = (record) => {

  const name = record.name;

  if(name === "countries" || name === "keywords")
  {
    return `resources.companydata.fields.${name}_choices.`;
  }

  return false;
}


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

      <MultiContentField source="value" sortable={false} translatable={ translatable } />

      <TextField source="updated_at" sortable={false} />

      <EditButton />

    </Datagrid>
</List>
);

export default ViewList;
