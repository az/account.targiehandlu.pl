import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  minLength
} from 'admin-on-rest';

import { validate } from './validation';

const ViewEdit = props => (

  <Edit  {...props}>

    <SimpleForm submitOnEnter={false}>

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
        validate={[required, minLength(9)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

    </SimpleForm>
  </Edit>

);

export default ViewEdit;
