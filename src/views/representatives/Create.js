import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  email,
  minLength
} from 'admin-on-rest';


import { validate } from './validation';

const ViewCreate = props => (
  <Create {...props}>

    <SimpleForm redirect="list" submitOnEnter={false}>

      <TextInput
        source="profile.fname"
        validate={[required, minLength(3)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="profile.lname"
        validate={[required, minLength(3)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="profile.position"
        validate={[required, minLength(3)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="profile.phone"
        validate={[required, minLength(3)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        type="email"
        source="profile.email"
        validate={[required, email]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

    </SimpleForm>
  </Create>
);

export default ViewCreate;
