
import React from 'react';

import {
  required,
  email,
  minLength
} from 'admin-on-rest';

export const basicValidation = (value, record, props) => required(value, record, props) || minLength(3)(value, record, props) || undefined
export const basicValidationEmail = (value, record, props) => basicValidation(value, record, props) || email(value, record, props) || undefined

