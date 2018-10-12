import {
  CHANGE_THEME,
  SET_USER,
  SPECIAL_MESSAGE_SHOW,
  SHOW_MODAL,
  CLOSE_MODAL,
  RESOURCE_LIMIT_SHOW,
  UPGRADE_CREATE
} from './types';

import { CREATE } from 'admin-on-rest';

export const upgradeCreate = (data, basePath) => ({
    type: UPGRADE_CREATE,
    payload: { data },
    meta: { resource: 'upgrades', fetch: CREATE, cancelPrevious: false },
});

export const changeTheme = theme => ({
  type: CHANGE_THEME,
  payload: theme
});

export const setUser = user => ({
  type: SET_USER,
  payload: user
});

export const setSpecialMessage = msg => ({
  type: SPECIAL_MESSAGE_SHOW,
  msg: msg
});

export const showModal = payload => ({
  type: SHOW_MODAL,
  payload: payload
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});



export const setResponseLimit = (resource, limit) => ({
  type: RESOURCE_LIMIT_SHOW,
  resource: resource,
  limit: limit
});
