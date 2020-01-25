import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput
} from 'admin-on-rest';

import { basicValidation, basicValidationEmail } from './validation';

const ViewCreate = props => (
  
  <Create {...props}>

    <SimpleForm redirect="list" submitOnEnter={false}>

      <TextInput
        source="profile.fname"
        validate={[basicValidation]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="profile.lname"
        validate={[basicValidation]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="profile.position"
        validate={[basicValidation]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        source="profile.phone"
        validate={[basicValidation]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <TextInput
        type="email"
        source="profile.email"
        validate={[basicValidationEmail]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

    </SimpleForm>
  </Create>
);

export default ViewCreate;
