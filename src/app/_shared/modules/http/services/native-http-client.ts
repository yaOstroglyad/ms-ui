import {HttpClient} from '../models/http-client.interface';
import {HttpRequestOptions} from '../models/http-request-options';
import {HttpMethod} from '../types/http-method';
import {HttpResponse} from '../models/http-response';
import {httpResponseConstructor} from '../utilites/http-response-constructor';

const mapFetchResponseToHttpResponse = <T>(response: Response, data: T): HttpResponse<T> => httpResponseConstructor({
  url: response.url,
  headers: response.headers,
  type: response.type,
  status: response.status,
  statusText: response.statusText,
  data,
});

export const nativeHttpClient: HttpClient = {
  get: async <T>(url: string, {headers = {}}) => {
    const response = await fetch(url, {headers});
    const data = await response.json();
    return mapFetchResponseToHttpResponse<T>(response, data);
  },
  post: async <T>(url: string, {body = {}, headers = {}}) => {
    const response = await fetch(url, {headers, body: JSON.stringify(body), method: 'POST'});
    const data = await response.json();
    return mapFetchResponseToHttpResponse<T>(response, data);
  },
  put: async <T>(url: string, {body = {}, headers = {}}) => {
    const response = await fetch(url, {headers, body: JSON.stringify(body), method: 'PUT'});
    const data = await response.json();
    return mapFetchResponseToHttpResponse<T>(response, data);
  },
  delete: async <T>(url: string, {headers = {}}) => {
    const response = await fetch(url, {headers, method: 'DELETE'});
    const data = await response.json();
    return mapFetchResponseToHttpResponse<T>(response, data);
  },
  request: <T>(url: string, method: HttpMethod, options: HttpRequestOptions) => {
    const httpMethodToClientRequest: Partial<Record<HttpMethod, (url: string, options: HttpRequestOptions) => Promise<HttpResponse<T>>>> = {
      GET: (url, options) => nativeHttpClient.get!<T>(url, options),
      POST: (url, options) => nativeHttpClient.post!<T>(url, options),
      PUT: (url, options) => nativeHttpClient.put!<T>(url, options),
      DELETE: (url, options) => nativeHttpClient.delete!<T>(url, options),
    };
    const httpRequest = httpMethodToClientRequest[method];
    if (!httpRequest) {
      throw new Error(`Http method ${method} is not supported.`)
    }
    return httpRequest(url, options);
  },
};
