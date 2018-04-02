


import React from 'react';
import { translate } from 'admin-on-rest';
import { Card } from 'material-ui/Card';


//import { Heading, Body } from '../../components/Typography';

import Informer from './Informer'

class Logistics extends React.Component {

  render() {
    
    const { translate } = this.props;


    return (

        <div className="list-page">
          <Card style={{ marginTop: -25 }}>

            <Informer />

          </Card>
        </div>

    );
  }
}

export default translate(Logistics);
