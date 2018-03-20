import {
  CHANGE_THEME,
  SPECIAL_MESSAGE_SHOW,
  SHOW_MODAL,
  CLOSE_MODAL,

  RESOURCE_LIMIT_SHOW,

} from './types';


import {importReducer} from '../views/imports/redux/reducers';



const changeThemeReducer = (previousState = 'light', { type, payload }) => {
  if (type === CHANGE_THEME) {
    return payload;
  }
  return previousState;
};

const specialmessageReducer = (previousState = '', { type, msg }) => {
  if (type === SPECIAL_MESSAGE_SHOW) {
    return msg;
  }

  return previousState;
};

const modalReducer = (previousState = '', { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return payload;


    case CLOSE_MODAL:
      return null;


    default:
      return previousState;
  }
};

const resourceLimitReducer = (previousState = {}, payload) => {
  switch (payload.type) {
    case RESOURCE_LIMIT_SHOW:
      return { ...previousState, [payload.resource]: payload.limit };
    

    default:
      return previousState;
  }
};




export default {
  import: importReducer,
  modal: modalReducer,
  userdata: changeThemeReducer,
  specialmessage: specialmessageReducer,
  resourcelimit: resourceLimitReducer
};
