import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import { fetchUtils } from 'admin-on-rest';
import get from 'lodash/get';

export const validateToken = token => {
  return /^[a-z0-9]{32,40}$/.test(token);
};
//
// export const storeResourceLimit = (resource, limit) => {
//     const limits = JSON.parse(localStorage.getItem('limits') || "{}");
//     limits[resource] = limit;
//     localStorage.setItem();
// }

export const getLocale = () => {
  return process.env.REACT_APP_LOCALE || "en"
}

export const storeUserData = (token, profile) => {
  localStorage.setItem('token', token);
  localStorage.setItem('profile', JSON.stringify(profile));
};

export const getUserData = (path, replacement) => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  return path !== undefined ? get(profile, path, replacement) : profile;
};

export const getUserFullName = () => {
  return getUserData('profile.fname') + ' ' + getUserData('profile.lname');
};

export const clearUserData = () => {
  localStorage.removeItem('profile');
  localStorage.removeItem('token');
};

export const fetchHtml = url => {
  const options = {
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })
  };

  return fetchUtils.fetchJson(url, options);
  // .then(response => {
  //
  //   console.log(response);
  //
  //   return Promise.resolve( );
  // });
};

export const refreshUserData = (token = getToken) => {
  const options = {
    headers: new Headers({
      Accept: 'application/json',
      'x-token': `${token}`
    })
  };

  return fetchUtils
    .fetchJson(`${process.env.REACT_APP_API_ENDPOINT}/me`, options)
    .then(response => {
      if ('data' in response.json) {
        storeUserData(token, response.json.data);
        return Promise.resolve();
      }

      return Promise.reject('Bad API answer.');
    });
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return validateToken(token) ? token : false;
};

export const getCompanyName = () => {
  return getUserData('company.name', getUserData('profile.cname2'));
};

export const getCompanyId = () => {
  return getUserData('company.id', 0);
};

export const getUserId = () => {
  return getUserData('id', 0);
};

export const getColorsFromTheme = theme => {
  if (!theme) return { primary1Color: cyan500, accent1Color: pinkA200 };
  const { palette: { primary1Color, accent1Color } } = theme;
  return { primary1Color, accent1Color };
};
