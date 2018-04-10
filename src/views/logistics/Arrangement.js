import React from 'react';
import { translate } from 'admin-on-rest';
import { Link } from 'react-router-dom';

import { Card } from 'material-ui/Card';

import { Heading, Body, Subheading } from '../../components/Typography';


import fullcolor_booth from './images/fullcolor_booth.png'
import osb_booth from './images/osb_booth.png'



const styles = {

  container : {
    display : 'flex',
    flexDirection : 'row',
    flexWrap : 'wrap',
    margin: 20,
  },

  column : {

    padding : 15

  },

  mainList : {
    margin: 30,

  }

}


class Arrangement extends React.Component {


  render() {

    const { translate } = this.props;


    return (

         <div className="list-page">

          <Card style={{ marginTop: -25 }}>

            <Heading first={true}>

              Zleć zabudowę swojego stoiska{` `}

              via e-mail: <a href="mailto:booths@targiehandlu.pl">booths@targiehandlu.pl</a>

            </Heading>

            <Subheading style={{marginLeft : 25}}>Obie wersje zawierają:</Subheading>

            <ul style={styles.mainList}>
              <li>biały, laminowany stół informacyjny</li>
              <li>stół + 2 hockery</li>
              <li>stojak na foldery</li>
              <li>doniczka z dekoracjami</li>
              <li>wykładzina</li>
              <li>przedłużacz</li>
              <li>montaż i demontaż po stronie organizatora</li>
            </ul>




            <div style={styles.container}>

              <div style={styles.column}>

                <ul>
                  <li><h3>tylna ściana OSB</h3></li>
                </ul>

                <img src={osb_booth} />

                <Heading>4200 pln netto</Heading>

              </div>

              <div style={styles.column}>

                <ul>
                  <li><h3>biała, laminowana ściana z logotypem</h3></li>
                </ul>


                  <img src={fullcolor_booth} />

                  <Heading>4000 pln netto</Heading>

              </div>

            </div>

            <Body>

            </Body>

          </Card>
        </div>
     );
  }
}


export default translate(Arrangement);
