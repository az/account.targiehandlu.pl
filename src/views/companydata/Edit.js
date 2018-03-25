import React from 'react';
import {
  Edit,
  SimpleForm
} from 'admin-on-rest';

import VarLabelTextField from '../../fields/VarLabelTextField'
import VarTextInput from '../../fields/VarTextInput'
import { Field } from 'redux-form';
import { validate } from './validation';
import {translate} from 'admin-on-rest';

const ViewEdit = props => (

  <Edit {...props} title="aor.action.edit">
    <SimpleForm  submitOnEnter={false} validate={validate}>

      <VarLabelTextField source="name" />


      <Field
        style={{marginTop: 40}}
        name="value"
        // parse={v => v.split('\n').filter(v => v)}
        component={VarTextInput}
        html={["about", "products", "expo"]}
        source="value"
        radios={
          {
            'countries' :  [
              'national', 'europe', 'global', 'other'
            ],
          }
        }
        checkboxes={{
          'countries' :  [
            'national', 'europe', 'global', 'other'
          ],
          'keywords' : [
            'logistics',
            'payment',
            'platform',
            'sales_generation',
            'development',
            'communication',
            'customer_support',
            'analytics',
            'international_sales',
            'omnichannel'
          ]}}
      />

    </SimpleForm>
  </Edit>

)

export default translate(ViewEdit);
