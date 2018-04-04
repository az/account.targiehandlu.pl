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

const Share = ({ translate, type, target, title, description }) => {

  const Icon = Icons[type]
  let link = '';

  const _title = title ? _escape( translate(title) ) : ''
  const _description = description ? _escape( translate(description) ) : ''
  const _target = _escape(target)

  switch (type) {
    case 'linkedin':
      link = `https://www.linkedin.com/shareArticle?mini=true&url=${ _target }&title=${ _title }&summary=${ _description }`;

      break;

    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${ _target }`;
      break;

    case 'twitter':
      link = `https://twitter.com/home?status=${ _target }`;

      break;

    default:
  }

  return (
    <Button
      label={translate(`actions.share_${type}`)}
      icon={<Icon />}
      href={link}
      target="_blank"
    />
  );
};

Share.defaultProps = {
  title : "",
  description : ""
}

export default translate(Share);
