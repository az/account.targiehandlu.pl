import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput
} from 'admin-on-rest';

import { basicValidation } from './validation';


const ViewEdit = props => (

  <Edit  {...props}>
    <SimpleForm submitOnEnter={false}>

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

    </SimpleForm>
  </Edit>
);

export default ViewEdit;
