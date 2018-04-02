import React, { Component } from 'react';
import withWidth from 'material-ui/utils/withWidth';
import { AppBarMobile } from 'admin-on-rest';



import Welcome from './Welcome';
import Informer from '../logistics/Informer';
import Contact from './components/Contact';


const styles = {
  welcome: { marginBottom: '2em' },
  flex: { display: 'flex' },
  leftCol: { flex: 1, marginRight: '1em' },
  rightCol: { flex: 1, marginLeft: '1em' },
  singleCol: { marginTop: '2em' }
};

class Dashboard extends Component {
  state = {};

  render() {
    const { width } = this.props;
    return (
      <div>
        {width === 1 && <AppBarMobile title="expojuicer" />}

        <Welcome style={styles.welcome} />

        <Informer />


        {/* <Contact /> */}




        {/*

       <div style={styles.flex}>
          <div style={styles.leftCol}>
            <div style={styles.flex} />
            <div style={styles.singleCol}>
              <Welcome style={styles.welcome} />
            </div>
          </div>
          <div style={styles.rightCol}>
            <div style={styles.flex} />
          </div>
        </div>

        */}
      </div>
    );
  }
}

export default withWidth()(Dashboard);
