import React from 'react';
import pure from 'recompose/pure';
import styles from '../styles/typography';

const Theading = ({ first, children }) => (
  <h2
    style={{
      ...styles.paragraph,
      ...styles.heading,
      ...(first ? styles.first : {})
    }}
  >
    {children}
  </h2>
);

const Heading = pure(Theading);

const TheadingMargin = ({ first, children }) => (
  <h2
    style={{
      ...styles.headingMargin,
      ...styles.heading,
      ...(first ? styles.first : {})
    }}
  >
    {children}
  </h2>
);

const HeadingMargin = pure(TheadingMargin);

const Tsubheading = ({ first, children }) => (
  <h3
    style={{
      ...styles.paragraph,
      ...styles.subheading,
      ...(first ? styles.first : {})
    }}
  >
    {children}
  </h3>
);

const Subheading = pure(Tsubheading);

const Tparagraph = ({ first, children }) => (
  <p style={{ ...styles.paragraph, ...(first ? styles.first : {}) }}>
    {children}
  </p>
);

const Paragraph = pure(Tparagraph);

const Tborder = ({ first, children }) => (
  <h3
    style={{
      ...styles.paragraph,
      ...styles.border,
      ...(first ? styles.first : {})
    }}
  >
    {children}
  </h3>
);

const Border = pure(Tborder);

export { Heading, HeadingMargin, Subheading, Paragraph, Paragraph as Body, Border };
