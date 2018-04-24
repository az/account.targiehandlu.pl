import React from 'react';
import {
  Create,
  SimpleForm,
  LongTextInput,
  DisabledInput,
  TextInput,
  required,
  email,
  minLength,
} from 'admin-on-rest';

import get from 'lodash/get';
import qs from 'query-string';

import { validate } from './validation';
import { getUserFullName, getUserData } from '../../helpers';

const ViewCreate = props => (
  <Create title="aor.page.meeting_request" {...props}>
    <SimpleForm redirect="list" submitOnEnter={false} validate={validate}>
      <DisabledInput
        source="participant_id"
        defaultValue={get(qs.parse(props.location.search), 'participant_id', 0)}
      />

      <LongTextInput
      source="message"
      validate={[required, minLength(10)]}
      style={{ maxWidth: 700 }}
      defaultValue={getUserData('company.profile.invitation_template')}
      />

      <TextInput
        source="data.from_name"
        validate={[required, minLength(4)]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
        defaultValue={getUserFullName()}
      />

      <TextInput
        type="email"
        source="data.from_email"
        validate={[required, email]}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
        defaultValue={getUserData('email')}
      />
    </SimpleForm>
  </Create>
);

export default ViewCreate;
