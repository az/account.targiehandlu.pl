import React from 'react';
import Button from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { translate } from 'admin-on-rest';

//escape() will not encode: @*/+
//encodeURI() will not encode: ~!@#$&*()=:/,;?+'
//encodeURIComponent() will not encode: ~!*()'

const title = () => {
  return encodeURIComponent(`Let's meet there!`);
};

const Share = ({ translate, type, target }) => {
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
      icon={<FontIcon className={`fa fa-${type}`} />}
      href={link}
      target="_blank"
    />
  );
};

/*

<Button
  label={translate('pos.share_twitter')}
icon={<FontIcon className="fa fa-twitter" />}
href={ tt() }
/>

<Button
  label={translate('pos.share_facebook')}
icon={<FontIcon className="fa fa-facebook" />}
href={ fb() }
/>

*/

export default translate(Share);
