import React from 'react';

// import { Title } from './Shared';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  minLength
} from 'admin-on-rest';

import { validate as validateInvites } from './validation';
// import { Heading, Subheading, Body } from '../../components/Typography';

const ViewCreate = props => (
  <Create title="Create contact list" {...props}>
    <SimpleForm
      redirect="list"
      submitOnEnter={false}
      validate={validateInvites}
    >
      <TextInput source="name" validate={[required, minLength(5)]} />
    </SimpleForm>
  </Create>
);

export default ViewCreate;
