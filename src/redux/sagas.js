//import sagaExamples from './sagaExamples';

import auth from './sagas/auth';
import messages from './sagas/messages';
import imports from '../views/imports/redux/sagas';
import user from './sagas/user';
import crud from './sagas/crud';

export default [
  auth,
  messages,
  imports,
  user,
  crud
  // sagaExamples
];
