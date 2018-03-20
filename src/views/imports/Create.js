import React from 'react';

import {
  Create,
  TabbedForm,
  FormTab,
  TextInput,
  required,
  minLength
} from 'admin-on-rest';

import { Field } from 'redux-form';
import ImportManually from './components/ImportManually';
import ImportCsv from './components/ImportCsv';

import { validate as validateInvites } from './validation';

// import { Heading, Subheading, Body } from '../../components/Typography';

const ViewCreate = props => (
  <Create title="resources.imports.fields.title" {...props}>
    <TabbedForm
      redirect="list"
      submitOnEnter={false}
      validate={validateInvites}
    >
      <FormTab label="resources.imports.tabs.import_csv">
        <TextInput source="name" validate={[required, minLength(5)]} />

        <Field name="imported_json" component={ImportCsv} />
      </FormTab>

      <FormTab label="resources.imports.tabs.import_manually">
        <TextInput source="name" validate={[required, minLength(5)]} />

        <Field
          name="imported_manually"
          parse={v => v.split('\n').filter(v => v)}
          component={ImportManually}
        />
      </FormTab>
    </TabbedForm>
  </Create>
);

export default ViewCreate;
