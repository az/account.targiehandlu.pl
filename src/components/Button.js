import React from 'react';

import {
  translate
} from 'admin-on-rest';

import PrimaryButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Eye} from 'mdi-material-ui'

const Button = ({raised, label, icon, translate, locale, ...rest}) => (

  raised ?
    <PrimaryButton
      label={ translate(label) }
      icon={icon}
      primary={true}
      {...rest}
      />
   : <FlatButton
      label={ translate(label) }
      icon={icon}
      {...rest}
    />

)


Button.defaultProps = {
  raised : false,
  icon : <Eye />
}

export default translate(Button)
