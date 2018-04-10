import React from 'react';

import { translate } from 'admin-on-rest';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import {resolveAssetPath} from '../helpers'

const styles = {
  avatar : {
    // width : 80,
    // height : 80,
    marginTop : 20,
  },
  link : {
    textDecoration : 'none',
    color : '#000000'
  }
}

const Contact = ({translate, avatar, phone, email}) => (


  <Card style={{boxShadow : 'none'}}>
         <CardHeader

           style={{padding: 12}}

           title={
              <CardTitle
                title={translate("pos.support.title")}
                subtitle={translate("pos.support.description")}
              />
           }

           subtitle={<CardHeader title={
              <span><a href={`mailto:${email}`} style={styles.link}>{email}</a> {phone}</span>
           } />}

           avatar={<Avatar size={80}  src={resolveAssetPath(avatar)} style={styles.avatar} />}
         />


         {/* <CardText >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
         </CardText> */}
         {/* <CardActions>
           <FlatButton label="Expand" onClick={this.handleExpand} />
           <FlatButton label="Reduce" onClick={this.handleReduce} />
         </CardActions> */}
       </Card>



);


Contact.defaultProps = {

  avatar : "bmeller.jpg",
  phone : "+48 721 945 134",
  email : "targiehandlu@targiehandlu.pl"

}

export default translate(Contact);
