import React from 'react';
import Button from 'material-ui/FlatButton';
import { translate } from 'admin-on-rest';

//escape() will not encode: @*/+
//encodeURI() will not encode: ~!@#$&*()=:/,;?+'
//encodeURIComponent() will not encode: ~!*()'
import {
    Linkedin,
    Facebook,
    Twitter
} from 'mdi-material-ui'


const Icons = {
  linkedin : Linkedin,
  facebook : Facebook,
  twitter : Twitter
}

const _escape = (str) => encodeURIComponent(str)

const Share = ({ translate, type, target, title, description, disabled }) => {

  const Icon = Icons[type]
  let link = '';

  const _target = _escape(target)

  switch (type) {
    case 'linkedin':
      link = `https://www.linkedin.com/sharing/share-offsite/?url=${ _target }`;

      break;

    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${ _target }`;
      break;

    case 'twitter':
      link = `https://twitter.com/intent/tweet?text=${ _target }`;

      break;

    default:
  }

  return (
    <Button
      label={translate(`actions.share_${type}`)}
      icon={<Icon />}
      href={link}
      target="_blank"
      disabled={disabled}
    />
  );
};

Share.defaultProps = {
  title : "",
  description : "",
  disabled : false
}

export default translate(Share);
