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

  <Edit {...props}
    title={  <VarLabelTextField {...props} source="name" /> }
    >

    <SimpleForm  submitOnEnter={false} validate={validate}>

      <VarLabelTextField source="name" translateKey="description" style={{marginTop: 10, marginBottom: 30}}/>

      <Field
        style={{marginTop: 40}}
        name="value"
        // parse={v => v.split('\n').filter(v => v)}
        component={VarTextInput}

        html={[
          "about",
          "products",
          "expo"]}

        source="value"

        radios={
          {
            'countries' :  [
              'national', 'europe', 'global', 'other'
            ],
            'lang' :  [
              'en', 'pl', 'de'
            ],
          }
        }

        uploads={
          ["opengraph_image"]
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
            'software',
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
