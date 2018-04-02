import React from 'react';
import { translate } from 'admin-on-rest';

import { Card, CardTitle } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import { httpClient } from '../../api/restClient';

import IconEmail from 'material-ui/svg-icons/communication/email';
import IconImages from 'material-ui/svg-icons/image/collections';

import Link from './components/Link';

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
      <Link key={i} creative={item} />
    ));
  }



  render() {
    const { translate } = this.props;

    return (
      <Card>
        <Heading first={true}>
          {translate("resources.creatives.heading")}
        </Heading>

        <Wrapper>{this.renderLinks()}</Wrapper>

        <Body />

      </Card>
    );
  }
}

export default translate(Creatives);
