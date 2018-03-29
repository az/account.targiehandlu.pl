import React from 'react';
import { translate, Restricted } from 'admin-on-rest';
import { Link } from 'react-router-dom';

import { Card } from 'material-ui/Card';

import Prize from './Prize';
//import Photogrid from './Photogrid';

import { getUserData } from '../../api/helpers';
import { httpClient } from '../../api/restClient';
import { Heading, Body } from '../../components/Typography';

class Stats extends React.Component {
  state = {
    stats: {},
    prizes: [],
    position: 0
  };

  componentDidMount() {
    this.getRanking();
  }

  getRanking() {
    httpClient(`${process.env.REACT_APP_API_ENDPOINT}/prizes`).then(
      response => {
        this.setState({
          stats: 'stats' in response.json.data ? response.json.data.stats : {},
          prizes: 'meta' in response.json ? response.json.meta.prizes : [],
          position:
            'position' in response.json.data ? response.json.data.position : 0
        });
      }
    );
  }

  render() {
    const { translate } = this.props;
    const { stats, prizes, position } = this.state;
    const { sessions } = stats;

    return (
      <Restricted authParams={{ foo: 'bar' }}>
        <div className="list-page">
          <Card style={{ marginTop: -25 }}>
            <Heading first={true}>
              {translate('resources.rewards.name')}{' '}
            </Heading>

            <Body>
              {translate('resources.rewards.body_text_1')}
              <Link to={{ pathname: '/ranking' }}>
                {translate('resources.ranking.name')}
              </Link>
              {translate('resources.rewards.body_text_2')}
              <Link to={{ pathname: '/creatives' }}>
                {translate('resources.creatives.name')}
              </Link>
              {translate('resources.rewards.body_text_3')}
            </Body>

            <Body>
              {translate("prizes.place")}
              {sessions ? `#${position}` : translate('prizes.unknown')}
            </Body>

            {prizes &&
              prizes.map(item => (
                <Prize
                  key={item.name}
                  prize={item}
                  position={position}
                  sessions={sessions}
                />
              ))}

            {/*
      <Subheading>Rewards in real life</Subheading>
      <Photogrid />
  */}
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
