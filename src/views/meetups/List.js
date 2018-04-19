import React from 'react';
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  TextField,
  SelectInput
} from 'admin-on-rest';

import StatusField from './components/StatusField';
import StatusAwareDeleteButton from './components/StatusAwareDeleteButton';

import ViewTitle from '../../components/ViewTitle';
import ListActions from './ListActions';
import _get from 'lodash/get'

const ViewFilter = props => (
  <Filter {...props} >
    {/*    <TextInput label="pos.search" source="q" alwaysOn /> */}
    <SelectInput
      source="status"
      allowEmpty
      choices={[
        { id: 'agreed', name: 'resources.meetups.fields.status.agreed' },
        { id: 'rejected', name: 'resources.meetups.fields.status.rejected' },
        { id: 'scheduled', name: 'resources.meetups.fields.status.scheduled' }
      ]}
    />
  </Filter>
);

/*
<h4 style={{}}>
  Below invitations are scheduled for sending and will be processed 2
  weeks before the event. Your limit is 5 invitations.
</h4>
*/
/*


"/meetups"
label : "resources.customers.fields.name"
record : {id: 14, creative_id: 4, agreed: 0, retries: 0, message: "", …}
resource : "meetups"
sortable : false
source : "participant.profile.fname"


*/
const FullNameField = ({resource, source, record }) => {

  return <span>{_get(record, `${source}.fname`)} {_get(record, `${source}.lname`)}</span>

}

FullNameField.defaultProps = {
  label: 'resources.meetups.fields.participant.name'
}

const ViewList = props => (
  <List
    title={<ViewTitle resource={props.resource} limit={true} />}
    {...props}
    actions={<ListActions />}
    //  actions={null}
    filters={<ViewFilter />}
    //  sort={{ field: 'cname2', order: 'ASC' }}
    perPage={50}
  >
    <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>

      <FullNameField
        source="participant.profile"
        sortable={false}
      />

      <TextField
        source="participant.profile.cname2"
        sortable={false}
      />

      <TextField source="message"  sortable={false} />
      <TextField source="comment" sortable={false} />

      <StatusField label="status" sortable={false} />
      <EditButton />

      <StatusAwareDeleteButton />
    </Datagrid>
  </List>
);

export default ViewList;
