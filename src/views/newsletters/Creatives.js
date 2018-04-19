import React from 'react';
import { translate } from 'admin-on-rest';

import { Card, CardTitle } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import { httpClient } from '../../api/restClient';

import IconEmail from 'material-ui/svg-icons/communication/email';
import IconImages from 'material-ui/svg-icons/image/collections';


import Newsletter from './components/Newsletter';

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
    const { data } = await res.json;
    await this.setStateAsync({ creatives: data });
  }

  filterByType(type) {
    const { creatives } = this.state;
    return Array.isArray(creatives)
      ? creatives.filter(item => item.act_as === type)
      : [];
  }

  renderNewsletters() {
    return this.filterByType('newsletter').map((item, i) => (
      <Newsletter key={i} creative={item} />
    ));
  }


  render() {
    const { translate } = this.props;

    return (

      <div>

        <Wrapper>

          {this.renderNewsletters()}

        </Wrapper>

      </div>

  
    );
  }
}

export default translate(Creatives);
