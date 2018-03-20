import React from 'react';
import { translate, Restricted } from 'admin-on-rest';
import { Link } from 'react-router-dom';

import { Card } from 'material-ui/Card';

 //import Photogrid from './Photogrid';

import { getUserData } from '../../api/helpers';
import { httpClient } from '../../api/restClient';
import { Heading, Subheading, Body } from '../../components/Typography';
import qrcode from '../../imgs/expo.png';
 import expolink from '../../imgs/expolink.png';
import badge from '../../imgs/badge.png';
import loggedin from '../../imgs/loggedin.png';
import sync from '../../imgs/sync.png';
import unathenticated from '../../imgs/unathenticated.png';



class Stats extends React.Component {

  state = {
    code : ""
  };

  componentDidMount() {
    this.getAuthCode();
  }

  getAuthCode() {
    httpClient(`${process.env.REACT_APP_API_ENDPOINT}/authcode`).then(
      response => {
        if('code' in response.json.data)
        {
          this.setState({
            code:  response.json.data.code
          });
        }
      }
    );
  }

  render() {

    const { translate } = this.props;
    const { code } = this.state;


    return (
      <Restricted authParams={{ foo: 'bar' }}>
        <div className="list-page">
          <Card style={{ marginTop: -25 }}>
            <Heading first={true}>
              {translate('resources.scans.info.name')}{' '}
            </Heading>


{code &&
<div>

<Subheading>
<strong>Step 1.</strong>
Install "Expo" app for {' '}
<a href="https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8" target="_blank" rel="noopener noreferrer">iOS (iPhone, iPad)</a> or {' '}
<a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www" target="_blank" rel="noopener noreferrer">Android</a>.
(Open Google Play or App Store and search "Expo". Then install. )
</Subheading>

<Subheading>
<strong>Step 2.</strong>
Open EXPO application and touch "Scan QR Code" (approve camera access if requested).
</Subheading>

<Body>
<img src={expolink} style={{width: 350 }} alt="" />
</Body>

<Subheading>
<strong>Step 3.</strong>
Scan below QR code in order to launch expojuicer mobile app
</Subheading>

<Body>
<img src={qrcode} style={{ width: 350 }} alt=""/>
</Body>


<Subheading>
<strong>Step 4.</strong>
When having expojuicer app active, scan below QR code to authenticate.
</Subheading>

<Body>
<img src={unathenticated} style={{width: 350 }} alt=""/>
</Body>


<Body>
<img src={`https://api.eventjuicer.com/v1/services/scanners/${code}`} alt="" />
</Body>

<Subheading>
<strong>Step 5.</strong>
Are you authenticated? Check if your company name is displayed on the screen (as shown below). If not go back to Step 4.
</Subheading>

<Body>
<img src={loggedin}  style={{width: 350 }} alt="" />
</Body>

<Subheading>
<strong>Step 6.</strong>
You are now ready to scan visitors' badges!
Repeat this process for every device you want to use.
</Subheading>

<Subheading>
<strong>Step 7.</strong>
Scan below badge to test things out! Switch to SCANS tab - you should see the data of the first visitor.
</Subheading>

<Body>
<img src={badge}  style={{width: 350 }} alt="" />
</Body>


<Subheading>
<strong>Step 8.</strong>
At the end of the expo day you may need to sync your device with our servers.
Pull down the SCANS screen in order to force syncing.
</Subheading>

<Body>
<img src={sync} style={{width: 350 }} alt="" />
</Body>


<Subheading>
<strong>Step 9.</strong>
All your scans should be visible within the desktop version of expojuicer.com under <Link to={{ pathname: '/scans' }}>
  {translate('resources.scans.name')}
</Link> page. If not please try to re-sync your mobile app data with our servers as described in Step 8.
</Subheading>

<Body>

</Body>


</div>}



          </Card>
        </div>
      </Restricted>
    );
  }
}

// const mapStateToProps = state => ({
//   ranking: state.admin.resources.ranking
// });
//
//
// const enhance = compose(
//   translate,
//   connect(mapStateToProps, null)
// );

export default translate(Stats);
