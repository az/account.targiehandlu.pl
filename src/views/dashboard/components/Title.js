import React from 'react';

import pure from 'recompose/pure';
import styles from '../../../styles/typography';

import { translate } from 'admin-on-rest';


const Ttitle = ({ first, children }) => (
  <h2
    style={{
      ...styles.paragraph,
      ...styles.title,
      ...(first ? styles.first : {})
    }}
  >
    {children}
  </h2>
);

const Title = pure(Ttitle);


const Info = ({translate}) => (
  <Title>
    {translate("informer.title")}
  </Title>
);

export default translate(Info);
