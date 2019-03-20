import React from 'react';
import {
  Show,
  SimpleShowLayout,
  Datagrid,
  TextField,
  DateField,
  ReferenceManyField,
  FunctionField
} from 'admin-on-rest';
 
import ShowActions from './ShowActions';
import CustomField from './CustomField' 
import ShowTitle from './ShowTitle'
import ModifyPurchaseField from './ModifyPurchaseField'
import AmountField from './AmountField'
import PurchaseStatusField from './PurchaseStatusField'
import PurchaseTicketsField from './PurchaseTicketsField'


const MyImageField = ({record}) => (
  <div><img src={record.image} style={{width : '100%'}} /></div>
)

MyImageField.defaultProps = {
  record : {}
}

const ViewEdit = (props) => (

  <Show {...props}
    title={ <ShowTitle /> }
    actions={<ShowActions />}
    >


    <SimpleShowLayout>
      
      <ReferenceManyField label="asd" reference="purchases" target="ticket_id">

        <Datagrid>

          <DateField source="ts" />
          <PurchaseTicketsField source="quantity" />
          <AmountField source="amount" />
          <PurchaseStatusField source="status" />
          <ModifyPurchaseField />

        </Datagrid>
      </ReferenceManyField>
    
      <CustomField />
      <MyImageField  />


    </SimpleShowLayout>

  </Show>

)

export default ViewEdit;
