import { fetchUtils } from 'admin-on-rest';
import { getUserFullName, getCompanyName } from '../helpers';

const buildMessage = message => {
  return {
    text: `${message}\n${getUserFullName()} from ${getCompanyName()}`,
    channel: `${process.env.REACT_APP_SLACK_CHANNEL}`
  };
};


const slack = message => {
  /*

    this is needed to handle CORS issue

    https://stackoverflow.com/questions/25727306/request-header-field-access-control-allow-headers-is-not-allowed-by-access-contr

    */
  const options = {
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };

  options.method = 'POST';
  options.body = JSON.stringify(buildMessage(message));

  return fetchUtils.fetchJson(`${process.env.REACT_APP_SLACK}`, options);

};

export default slack;
