import React from 'react';
import {
  Edit,
  SimpleForm,
  LongTextInput,
  TextField,
  minLength
} from 'admin-on-rest';

import FullNameField from '../../fields/FullNameField';
import { validate } from './validation';
//import { getUserFullName, getUserData } from '../../api/helpers';

const ViewEdit = props => (
  <Edit title="resources.meetups.fields.participant.profile.title" {...props}>
    <SimpleForm submitOnEnter={false} validate={validate}>
      <FullNameField source="admin.profile" label="Creator" />

      <TextField
        source="message"
        validate={[minLength(10)]}
        style={{ maxWidth: 544 }}
      />

      <LongTextInput source="comment" style={{ maxWidth: 544 }} />

      <TextField source="participant.profile.fname" />
      <TextField source="participant.profile.lname" />
      <TextField source="participant.profile.cname2" />
      <TextField source="participant.profile.position" />
    </SimpleForm>
  </Edit>
);

export default ViewEdit;
