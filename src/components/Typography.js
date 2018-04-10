import React from 'react';
import styles from '../styles/typography';
import {translate} from 'admin-on-rest'
import { Card, CardTitle } from 'material-ui/Card';



export const Page = ({children,label}) => (
  <div className="list-page" style={{ marginTop: 25 }}><Card>{children}</Card></div>
)

const _PageTitle = ({translate,label}) => (
  <CardTitle title={translate(label)} />
)

export const PageTitle = translate(_PageTitle)


const _Heading = ({ first, children, style, label, translate }) => (
  <h2
    style={{
      ...styles.paragraph,
      ...styles.heading,
      ...(first ? styles.first : {}),
      ...style
    }}
  >
    {label ? translate(label) : children}
  </h2>
);

_Heading.defaultProps = {
  style : {}
}

export const Heading = translate(_Heading);

const _Subheading = ({ first, children, style, label, translate }) => (
  <h3
    style={{
      ...styles.paragraph,
      ...styles.subheading,
      ...(first ? styles.first : {}),
      ...style
    }}
  >
  {label ? translate(label) : children}
  </h3>
);

_Subheading.defaultProps = {
  style : {}
}

export const Subheading = translate(_Subheading);



const _SectionTitle = ({ children, style, label, translate }) => (
  <h4
    style={{
      ...styles.paragraph,
      ...styles.sectionTitle,
      ...style
    }}
  >
  {label ? translate(label) : children}
  </h4>
);

_SectionTitle.defaultProps = {
  style : {}
}

export const SectionTitle = translate(_SectionTitle);



const  _Paragraph = ({ first, children, style, label, translate }) => (
  <p style={{ ...styles.paragraph, ...(first ? styles.first : {}), ...style }}>
    {label ? translate(label) : children}
  </p>
);

_Paragraph.defaultProps = {
  style : {}
}

const Paragraph = translate(_Paragraph);


const _Body = ({translate, children, label, style}) => (<div style={{...style, ...{marginTop: 20}}}>{children}</div>)

_Body.defaultProps = {
    style : {}
}

export const Body = translate(_Body);

const _List = ({items, translate, baseLabel, style}) => (<div style={{...style}}>
  <ul>{items.map((item, idx) => <li key={idx}>{baseLabel ? translate(`${baseLabel}.${item}`) : item}</li>)}</ul>
</div>)

_List.defaultProps = {
  items : [],
  style : {}
}

export const List = translate(_List)
