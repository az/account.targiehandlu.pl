
import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import { AppBarMobile } from 'admin-on-rest';
import Welcome from './Welcome';
import {List as TaskList} from '../tasks'

const styles = {
  welcome: { marginBottom: '5em' },
};

const Dashboard = ({ width, history }) => (

  <div style={styles.welcome}>

    {width === 1 && <AppBarMobile title={`${process.env.REACT_APP_SITENAME}`} />}

    <Welcome />

    {/* <TaskList location={history.location} basePath="tasks" /> */}

  </div>

)


export default withWidth()(Dashboard);
