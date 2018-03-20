import React from 'react';
import { Card, CardTitle, CardHeader, CardText } from 'material-ui/Card';

import { translate } from 'admin-on-rest';

//import Avatar from 'material-ui/Avatar';
//import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
// import HomeIcon from 'material-ui/svg-icons/action/home';
// import CodeIcon from 'material-ui/svg-icons/action/code';
//import FlatButton from 'material-ui/FlatButton';


export default translate(({ style, translate }) => (
  <Card style={style}>
    <CardTitle
      title={translate('dashboard.welcome.title')}
      subtitle={translate('dashboard.welcome.subtitle')}
    />

    <CardText>{translate('dashboard.welcome.description')}</CardText>

    <Card>
      <CardHeader title={translate("dashboard.tutorial")} />

      <CardText>
        <iframe
          title="Tutorial"
          width="800"
          height="450"
          src="https://www.youtube.com/embed/adF7n7297u8?rel=0&amp;showinfo=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </CardText>
    </Card>

    {/* <CardActions style={{ textAlign: 'right' }}>
      <FlatButton
        label={translate('pos.dashboard.welcome.aor_button')}
        icon={<HomeIcon />}
        href="https://github.com/eventjuicer/expojuicer/issues"
        target="_blank"
      />
      <FlatButton
        label={translate('pos.dashboard.welcome.demo_button')}
        icon={<CodeIcon />}
        href=""
      />
    </CardActions> */}
  </Card>
));
