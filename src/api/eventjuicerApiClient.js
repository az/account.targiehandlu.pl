import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils
} from 'admin-on-rest';

import {} from './helpers';

/**
 * Maps admin-on-rest queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 * @example
 * GET_LIST     => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts/123, GET http://my.api.url/posts/456, GET http://my.api.url/posts/789
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts/123
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
  /**
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The REST request params, depending on the type
   * @returns {Object} { url, options } The HTTP request parameters
   */
  const convertRESTRequestToHTTP = (type, resource, params) => {
    let url = '';
    const options = {};
    switch (type) {
      case GET_LIST: {
        const { page } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          ...params.filter,
          _sort: field,
          _order: order,
          page: page

          //   _start: (page - 1) * perPage,
          //   _end: page * perPage,
        };
        url = `${apiUrl}/${resource}?${fetchUtils.queryParameters(query)}`;
        break;
      }
      case GET_ONE:
        url = `${apiUrl}/${resource}/${params.id}`;
        break;
      case GET_MANY_REFERENCE: {
        const { page } = params.pagination;
        const { field, order } = params.sort;
        const query = {
          ...params.filter,
          [params.target]: params.id,
          _sort: field,
          _order: order,
          page: page
          // _start: (page - 1) * perPage,
          // _end: page * perPage,
        };
        url = `${apiUrl}/${resource}?${fetchUtils.queryParameters(query)}`;
        break;
      }

      case UPDATE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = 'PUT';
        options.body = JSON.stringify(params.data);
        break;
      case CREATE:
        url = `${apiUrl}/${resource}`;
        options.method = 'POST';

        console.log(params.data);

        switch (resource) {
          case 'invites':
            options.body = JSON.stringify(params.data);
            break;
          default:
            options.body = JSON.stringify(params.data);
        }

        break;
      case DELETE:
        url = `${apiUrl}/${resource}/${params.id}`;
        options.method = 'DELETE';
        break;
      default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
    return { url, options };
  };

  /**
   * @param {Object} response HTTP response from fetch()
   * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
   * @param {String} resource Name of the resource to fetch, e.g. 'posts'
   * @param {Object} params The REST request params, depending on the type
   * @returns {Object} REST response
   */
  const convertHTTPResponseToREST = (response, type, resource, params) => {
    const { headers, json } = response;

    // console.log(json.data);

    switch (type) {
      case GET_LIST:
      case GET_MANY_REFERENCE:
        if (!headers.has('x-total-count')) {
          //    throw new Error('The X-Total-Count header is missing in the HTTP Response. The jsonServer REST client expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?');
        }
        const data = {
          data: json.data,
          total: parseInt(
            headers
              .get('x-total-count')
              .split('/')
              .pop(),
            10
          )
        };

        if ('meta' in json) {
          data['meta'] = json.meta;
        }

        return data;
      case CREATE:
        return { data: { ...params.data, id: json.data.id } };

      default:
        return { data: json.data };
    }
  };

  /**
   * @param {string} type Request type, e.g GET_LIST
   * @param {string} resource Resource name, e.g. "posts"
   * @param {Object} payload Request parameters. Depends on the request type
   * @returns {Promise} the Promise for a REST response
   */
  return (type, resource, params) => {
    // json-server doesn't handle WHERE IN requests, so we fallback to calling GET_ONE n times instead
    if (type === GET_MANY) {
      return Promise.all(
        params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}`))
      ).then(responses => ({
        data: responses.map(response => response.json.data)
      }));
    }
    const { url, options } = convertRESTRequestToHTTP(type, resource, params);
    return httpClient(url, options).then(response =>
      convertHTTPResponseToREST(response, type, resource, params)
    );
  };
};
