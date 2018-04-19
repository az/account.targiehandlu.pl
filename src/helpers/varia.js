
import { fetchUtils } from 'admin-on-rest';
import get from 'lodash/get';
import slugify from 'slugify'


export const resolveAssetPath = (path) => {

  if(/^http/.test(path)){
    return path
  }

  if(path.charAt(0) === "/"){
    path = path.slice(1)
  }
  return `${process.env.PUBLIC_URL}/${path}`;
}

//
// export const storeResourceLimit = (resource, limit) => {
//     const limits = JSON.parse(localStorage.getItem('limits') || "{}");
//     limits[resource] = limit;
//     localStorage.setItem();
// }



export const validateToken = token => {
  return /^[a-z0-9]{32,40}$/.test(token);
};


export const lsGet = key => JSON.parse(localStorage.getItem(key))
export const lsSet = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const getLocale = () => {
  return lsGet("locale") || process.env.REACT_APP_LOCALE || "en"
}

export const storeUserData = (token, profile) => {
  lsSet("token", token)
  lsSet('profile', profile)
};


export const getToken = () => {
  const token = lsGet('token');
  return validateToken(token) ? token : false;
};


export const getUserData = (path, replacement) => {
  const profile = lsGet("profile");
  return path !== undefined ? get(profile, path, replacement) : profile;
};

export const clearUserData = () => {
  localStorage.removeItem('profile');
  localStorage.removeItem('token');
};



export const refreshUserData = (token = getToken()) => {
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





export const getUserFullName = () => {
  return getUserData('profile.fname') + ' ' + getUserData('profile.lname');
};

export const getUserId = () => {
  return getUserData('id', 0);
};

export const getCompanyName = () => {
  return getUserData('company.profile.name',
          getUserData('company.slug',
            getUserData('profile.cname2', '')
          ));
};

export const getCompanyId = () => {
  return getUserData('company.id', 0);
};



export const opengraphImage = (key = "logotype", lang = "pl") => {

  return `https://res.cloudinary.com/eventjuicer/image/upload/c_fit,g_center,h_220,w_600,y_30,l_c_${getCompanyId()}_${key}/template_4_${lang}.png`

}




export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const slug = (str = "") => slugify(str, {
    replacement: '-',
    remove: null,
    lower: true
})


export const removeSlashes = (str = "") => str.replace(/^\/|\/$/g, '')

export const getFullUrl = (str) => {
  const homepage = removeSlashes(process.env.REACT_APP_HOMEPAGE)
  return `${homepage}/${removeSlashes(str)}`
}

export const getDefaultTracking = () => {}

export const addUrlParam = (url = "", param = "") => {

  if(param.indexOf("?")===0)
  {
    param = param.slice(1)
  }

  if(!param.length)
  {
    return url
  }

  return url.indexOf("?") > -1 ? `${url}&${param}` : `${url}?${param}`
}


export const getProfileUrl = (params = "", purgeCache = false) => {

  let url = getFullUrl(`${slug(getCompanyName())},c,${getCompanyId()}`)

  if(params.length){
    url = addUrlParam(url, params)
  }

  if(purgeCache){
    url = addUrlParam(url, 'purge')
  }
  return url
}




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
