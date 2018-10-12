import React from 'react';
import {
  Show,
  SimpleShowLayout
} from 'admin-on-rest';
 
import ShowActions from './ShowActions';
import CustomField from './CustomField' 
import ShowTitle from './ShowTitle'

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
      
      <CustomField />
      <MyImageField  />
   
    </SimpleShowLayout>
  </Show>

)

export default ViewEdit;
