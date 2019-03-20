

import React from 'react';
import {translate} from 'admin-on-rest';
import _get from 'lodash/get';

import Chip from 'material-ui/Chip';
import { getColorsFromTheme } from '../styles/muiTheme';

const isHTML = (str = "") => str && /<[a-z][\s\S]*>/i.test(str)

const stripTags = html => {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return (tmp.textContent || tmp.innerText || "").substr(0, 100);
}

const styles = {

  chip : {
    margin: 3,
    color: 'white'
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },

}

const { accent1Color, accent3Color} = getColorsFromTheme();


const MultiContentField = ({basePath, record, resource, source, translate, baseLabel }) => {

  const value = _get(record, source);

  const _translatable = baseLabel(record)

  if(isHTML(value))
  {
    return stripTags(value)
  }

  if(Array.isArray(value))
  {
    return <div style={styles.wrapper}>{value.map(item => <Chip key={item}
      backgroundColor={accent3Color}
      labelColor="#ffffff"
      style={styles.chip}>{_translatable ? translate(_translatable + item) : item}</Chip>)}</div>
  }

  if(_translatable && value.length)
  {
      return translate(_translatable + value)
  }

  return value;

};

MultiContentField.defaultProps = {
  baseLabel : function(){ return false; }
}


export default translate(MultiContentField);
