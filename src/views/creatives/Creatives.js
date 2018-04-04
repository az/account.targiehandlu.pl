import React from 'react';
import { translate } from 'admin-on-rest';
import { Link } from 'react-router-dom';

import { Card, CardTitle } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import { httpClient } from '../../api/restClient';
import CreativeLink from './components/Link';
import { Heading, Subheading, Body } from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

function handleActive(tab) {
  //  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class Creatives extends React.Component {
  state = {
    creatives: []
  };

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const res = await httpClient(
      `${process.env.REACT_APP_API_ENDPOINT}/creatives`
    );
    const { meta } = await res.json;
    await this.setStateAsync({ creatives: meta.creatives });
  }

  filterByType(type) {
    const { creatives } = this.state;
    return Array.isArray(creatives)
      ? creatives.filter(item => item.act_as === type)
      : [];
  }

  renderLinks() {
    return this.filterByType('link').map((item, i) => (
      <CreativeLink key={i} creative={item} />
    ));
  }



  render() {
    const { translate } = this.props;

    return (
      <Card>
        <Heading first={true}>
          {translate("resources.creatives.heading")}
        </Heading>

        <Subheading style={{color: '#666'}} >
          <strong>UWAGA </strong>
          Pamiętaj aby zaktualizować swój {' '}
            <Link to={{ pathname: '/companydata' }}>profil</Link>{' '}przed udostępnianiem linków!<br/>
          <strong>WARNING </strong>
          Please update your{' '}<Link to={{ pathname: '/companydata' }}>company data</Link>{' '}before sharing below links!
        </Subheading>

        <Wrapper>{this.renderLinks()}</Wrapper>

        <Subheading style={{marginBottom:100, paddingBottom: 100}}>
          Szablony newsletterów oraz kreacje graficzne zostaną udostępnione wkrótce.<br/>
          Newsletter templates and banners will be published soon.
        </Subheading>

      </Card>
    );
  }
}

export default translate(Creatives);
