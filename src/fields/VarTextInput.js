import React from 'react';

import {
  LongTextInput,
//  TextInput,
  CheckboxGroupInput
} from 'admin-on-rest'

import pure from 'recompose/pure'

import RichTextInput from 'aor-rich-text-input';

//https://quilljs.com/docs/modules/toolbar/


const buildChoices = (choices, resource, prefix) => {

  return choices.map(choice => ({
    "id" : choice,
    "name" : `resources.${resource}.fields.${prefix}_choices.${choice}`
  }))

}

const VarTextInput = props => {

  const { record, resource, html, checkboxes} = props;

  const name = record.name;

  if(name in checkboxes)
  {
    return <CheckboxGroupInput {...props} choices={ buildChoices(checkboxes[name], resource, name) } />
  }

  if(html.indexOf(name) > -1)
  {
    return <RichTextInput {...props} toolbar={[
      [{ 'header': 3 }],
      ['bold', 'italic', 'link'],
      ['blockquote', { 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ]} />
  }

  return (
    <LongTextInput {...props}  />
  )
}

VarTextInput.defaultProps = {
  html : [],
  checkboxes : {}
}

export default pure(VarTextInput);

// {source: "name", sortable: false, record: {…}, basePath: "/companydata", resource: "companydata"}
