import React from 'react';

// import { Title } from './Shared';



import {

  Create,
  SimpleForm,

  TextInput,
  LongTextInput,

  ReferenceInput,
  SelectInput,

  ReferenceArrayInput,
  CheckboxGroupInput,

  DateInput

} from 'admin-on-rest';

import { validate } from './validation';

const ViewCreate = props => (
  <Create title="resources.campaigns.creative" {...props}>
    <SimpleForm
      redirect="list"
      submitOnEnter={false}
      validate={validate}
    >

      <TextInput
        source="name"
      />

      <DateInput
        source="scheduled_at"
      />

      {/* <TextInput
        type="email"
        source="email"
        validation={{ email: true }}
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      /> */}

      <TextInput
        source="data.from_email"
        options={{ fullWidth: true }}
        style={{ display: 'inline-block' }}
      />

      <TextInput
        source="data.from_name"
        options={{ fullWidth: true }}
        style={{ display: 'inline-block', marginLeft: 32 }}
      />

      <LongTextInput
        source="data.subject"
        options={{ fullWidth: true }}
        style={{ width: 544 }}
      />

      <ReferenceArrayInput source="contactlist_ids" reference="contactlists" allowEmpty>
         <CheckboxGroupInput  translateChoice={true}/>
      </ReferenceArrayInput>

      <ReferenceInput source="creative_id" reference="creatives" allowEmpty>
         <SelectInput  optionText="name" />
      </ReferenceInput>

    </SimpleForm>
  </Create>
);

export default ViewCreate;
//<SelectArrayInput optionText="name" />
