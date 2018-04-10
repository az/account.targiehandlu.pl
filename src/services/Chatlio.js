import React from 'react';
import { getUserData, getUserFullName, getCompanyName } from '../helpers';

class Chatlio extends React.Component {
  componentDidMount() {
    document.addEventListener(
      'chatlio.firstMessageSent',
      this.handleChatlioFirstMessage
    );
    document.addEventListener('chatlio.ready', this.handleChatlioFirstMessage);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'chatlio.firstMessageSent',
      this.handleChatlioFirstMessage
    );
    document.removeEventListener(
      'chatlio.ready',
      this.handleChatlioFirstMessage
    );
  }

  handleChatlioFirstMessage = event => {
    window._chatlio.identify(getUserData('id'), {
      name: getCompanyName(),
      email: getUserData('email'),
      representative: getUserFullName()
      // plan: 'king',
      // favoriteColor: 'black'
    });
  };

  render() {
    return null;
  }
}

export default Chatlio;
