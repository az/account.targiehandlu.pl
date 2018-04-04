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

const title = () => {
  return encodeURIComponent(`Let's meet there!`);
};

const Share = ({ translate, type, target }) => {

  const Icon = Icons[type]

  const encTarget = encodeURIComponent(target);

  let link = '';

  switch (type) {
    case 'linkedin':
      link = `https://www.linkedin.com/shareArticle?mini=true&url=${encTarget}&title=${title()}&summary=${''}`;

      break;

    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${encTarget}`;
      break;

    case 'twitter':
      link = `https://twitter.com/home?status=${encTarget}`;

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


export default translate(Share);
