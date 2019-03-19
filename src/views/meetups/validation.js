//import React from 'react';

import {
  required,
  email,
  minLength
} from 'admin-on-rest';

export const validate = values => {
  const errors = {};

  // if (!values.message && !values.creative_id) {
  //   errors.message = ['Choose template or type in message below'];
  //   errors.creative_id = ['No data detected...'];
  // }

  if (!values.message) {
    errors.message = ['Type in message below'];
    // errors.creative_id = ['No data detected...'];
  }

  return errors;
};


export const basicValidation = (value, record, props) => required(value, record, props) || minLength(3)(value, record, props) || undefined
export const basicValidationEmail = (value, record, props) => basicValidation(value, record, props) || email(value, record, props) || undefined

