import React from 'react';
import { connect } from 'react-redux';

import {
  showNotification as showNotificationAction
} from 'admin-on-rest';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import PrimaryButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import IconCopy from 'material-ui/svg-icons/content/content-copy';

const CopyToClipboardButton = ({
  text,
  showNotification,
  label = 'Copy To Clipboard',
  raised = false
}) => (
  <CopyToClipboard
    text={text}
    onCopy={() => showNotification('actions.copied')}
  >
    {raised ? (
      <PrimaryButton label={label} icon={<IconCopy />} primary={true} />
    ) : (
      <FlatButton label={label} icon={<IconCopy />} />
    )}
  </CopyToClipboard>
);


export default connect(null, {
  showNotification: showNotificationAction
})(CopyToClipboardButton);
