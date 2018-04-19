import React from 'react';
import { translate } from 'admin-on-rest';
import { Link } from 'react-router-dom';

import { Card, CardTitle } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import { httpClient } from '../../api/restClient';
import CreativeLink from './components/Link';
import { Heading, SectionTitle, Body } from '../../components/Typography';
import Wrapper from '../../components/Wrapper';
import Important from '../../components/Important'

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
    const { data } = await res.json;
    await this.setStateAsync({ creatives: data });
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
      <div>


        <Wrapper>

          {this.renderLinks()}

        </Wrapper>


      </div>
    );
  }
}

export default translate(Creatives);
