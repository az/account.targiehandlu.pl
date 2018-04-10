import React from 'react';
import pure from 'recompose/pure';

//import NoResults from './NoResults';
const styles = {

  default : {
    paddingTop: 30,
    paddingBottom: 50,
    margin: 20
  },
  top : {
    marginTop: 25
  },
  moretop : {
    marginTop: 40
  },
  bottom : {
    marginBottom : 40
  }
}


const Wrapper = ({children, spacing, style}) => (
  <div style={{
    ...styles.default,
    ...(spacing in styles ? styles[spacing] : {}),
    ...style
  }}>
    {children}
  </div>
);

Wrapper.defaultProps = {
  spacing : 'default',
  style : {}
}

export default pure(Wrapper);
