import React from 'react';
import pure from 'recompose/pure';
import styles from '../styles/typography';

const Theading = ({ first, children, style }) => (
  <h2
    style={{
      ...styles.paragraph,
      ...styles.heading,
      ...(first ? styles.first : {}),
      ...style
    }}
  >
    {children}
  </h2>
);

Theading.defaultProps = {
  style : {}
}

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

const Tsubheading = ({ first, children, style }) => (
  <h3
    style={{
      ...styles.paragraph,
      ...styles.subheading,
      ...(first ? styles.first : {}),
      ...style
    }}
  >
    {children}
  </h3>
);

Theading.defaultProps = {
  style : {}
}

const Subheading = pure(Tsubheading);


const Tparagraph = ({ first, children, style }) => (
  <p style={{ ...styles.paragraph, ...(first ? styles.first : {}), ...style }}>
    {children}
  </p>
);

Tparagraph.defaultProps = {
  style : {}
}

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
