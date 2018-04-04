import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

import Bulb from 'material-ui/svg-icons/image/brightness-1';
//import Rejected from 'material-ui/svg-icons/action/lightbulb-outline';
import Warning from 'material-ui/svg-icons/alert/warning';
// import IconReward from 'material-ui/svg-icons/action/info';

import { translate } from 'admin-on-rest';

import {
  Microphone,
  Video,
  Eye,
  Ticket,
  Calendar,
  BarcodeScan,
  VolumeHigh,
  Newspaper
} from 'mdi-material-ui'

import {
  success,
  disabledBg,
  disabledHeader,
} from '../../styles/colors';

//import Photogrid from './Photogrid';

const styles = {
  avatar : {
    width : 80,
    height : 80,
    marginTop : 20,
    color : '#666666'
  }
}

const Icons = {
  presentation : Microphone,
  video_interview : Video,
  brand_highlight : Eye,
  leaflets : Ticket,
  meetups : Calendar,
  scanner : BarcodeScan,
  rollups : VolumeHigh,
  blog : Newspaper
}

const rewarded = (prize, position, sessions) => {
  const level = 'level' in prize ? prize.level : 0;

  if (!sessions) {
    return null;
  }

  if (prize.min <= position && position <= prize.max && level < sessions) {
    return true;
  }

  return false;
};

const avatar = (prize, position, sessions) => {
  const status = rewarded(prize, position, sessions);

  if (status === null) {
    return <Warning color="#F44336" />;
  }

  if (status) {
    return <Bulb color={success} />;
  }

  return <Bulb color={disabledHeader} />;
};

const conditions = ({ min, max, level}, translate) => {
  const levelInfo = level ? `, minimum ${level}` + translate('prizes.points') : '';

  if (min === max) {
    if (min === 1) {
      return translate("prizes.must_be_winner") + `${levelInfo}`;
    }
    return translate("prizes.position_2") + `${min}${levelInfo}`;
  }
  return translate("prizes.position_1") + `${min}` + translate("prizes.and") + `${max}${levelInfo}`;
}


const Prize = ({ translate, prize, position, sessions }) => {

  const Icon = prize.name in Icons ? Icons[prize.name] : Bulb

  return (<Card>
        <CardHeader

          avatar={<Icon style={styles.avatar} /> }
          style={{padding: 12}}
          title={
              <CardTitle
                title={ translate(`prizes.${prize.name}.title`) }
                subtitle={ translate(`prizes.${prize.name}.description`) }
              />
          }
          subtitle={  <CardHeader
              title={conditions(prize, translate)}
              avatar={avatar(prize, position, sessions)}
              style={{paddingTop:0}}
            />}

        />
      </Card>

)};

//
//

export default translate(Prize);
