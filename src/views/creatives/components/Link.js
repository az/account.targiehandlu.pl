import React from 'react';
// import { connect } from 'react-redux';
// import compose from 'recompose/compose';
import { translate } from 'admin-on-rest';

import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';

import Share from '../../../components/Share';
import { colorBg, colorHeader } from '../../../styles/colors';

import Button from '../../../components/Button';
import CopyToClipboardButton from '../../../components/CopyToClipboardButton';

import {getProfileUrl} from '../../../api/helpers'

const Creative = ({ creative, translate }) => (
  <Card
    //containerStyle={{ backgroundColor: "#ffffff" }}
    >
    <CardHeader
    //style={{ backgroundColor: colorHeader }}
      title={translate('resources.creatives.types.link.title')}
    />

{/*
<CardText>
{creative.link}
</CardText>
*/}

    <CardActions>



        <Button
          raised={true}
          href={getProfileUrl(creative.link)}
          label={translate('resources.creatives.actions.jumpto')}
          target="_blank"
        />

        <CopyToClipboardButton
          text={ getProfileUrl(creative.link) }
          raised={false}
          label={translate("resources.creatives.actions.copy_to_clipboard")}
        />



      {'shareable' in creative &&
        creative.shareable && (
          <span>
           <Share type="facebook" target={ getProfileUrl(creative.link) } />
            <Share type="linkedin" target={ getProfileUrl(creative.link) } />
            <Share type="twitter" target={ getProfileUrl(creative.link) } />
        </span>
        )}

    </CardActions>
  </Card>
);

export default translate(Creative);
