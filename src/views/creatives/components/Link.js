import React from 'react';
// import { connect } from 'react-redux';
// import compose from 'recompose/compose';
import { translate } from 'admin-on-rest';

import compose from 'recompose/compose'
import { connect } from 'react-redux';
import { showModal as showModalAction } from '../../../redux/actions';

import { Card, CardHeader, CardTitle, CardActions } from 'material-ui/Card';

import Share from '../../../components/Share';
import { colorBg, colorHeader } from '../../../styles/colors';

import Button from '../../../components/Button';
import CopyToClipboardButton from '../../../components/CopyToClipboardButton';
import Requirements from '../../../components/Requirements';

import {
  opengraphImage,
  getProfileUrl
} from '../../../helpers'

import Warning from 'material-ui/svg-icons/alert/warning';



const isEnabled = (creative) => ("enabled" in creative && creative.enabled)

const Creative = ({ creative, translate, showModal }) => (
  <Card
    //style={{boxShadow : 'nsone'}}
    //containerStyle={{ backgroundColor: "#ffffff" }}
    >

      <CardHeader

        style={{padding: 0}}
        title={
          <CardTitle
            title={translate(`resources.creatives.links.${creative.name}.title`)}
            subtitle={translate(`resources.creatives.links.${creative.name}.description`)}
          />
        }
        subtitle={    <CardHeader
          //style={{ backgroundColor: colorHeader }}
            title={ ! isEnabled(creative) ? <Requirements label="resources.creatives.links.disabled" data={creative.requires} /> : null }
            avatar={! isEnabled(creative) ? <Warning color="#F44336" /> : null }
            style={{paddingTop:0}}
          />
        }



      />

    <CardActions>

        <Button

          disabled={!isEnabled(creative)}
          raised={true}
          label='resources.creatives.actions.preview'

          onClick={() =>
            showModal({
              title: translate("resources.creatives.links.preview"),
              body: <div><img src={opengraphImage(creative.name)} alt="" style={{maxWidth : 900}} /></div>,
            })
          }

        />

        <CopyToClipboardButton
          text={ getProfileUrl(creative.link) }
          raised={false}
          label={translate("resources.creatives.actions.copy_to_clipboard")}
          disabled={!isEnabled(creative)} 
        />



      {'shareable' in creative &&
        creative.shareable && (
          <span>
           <Share type="facebook" target={ getProfileUrl(creative.link) }   disabled={!isEnabled(creative)} />
            <Share type="linkedin" target={ getProfileUrl(creative.link) }   disabled={!isEnabled(creative)} />
            <Share type="twitter" target={ getProfileUrl(creative.link) }   disabled={!isEnabled(creative)} />
        </span>
        )}

    </CardActions>
  </Card>
);

const enhance = compose(
  connect(null, {
    showModal: showModalAction
  }),
  translate
)


export default enhance(Creative);
