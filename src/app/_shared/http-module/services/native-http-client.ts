import {HttpClient} from '../models/http-client.interface';
import {HttpRequestOptions} from '../models/http-request-options';
import {HttpMethod} from '../types/http-method';
import {HttpResponse} from '../models/http-response';
import {httpResponseConstructor} from '../utilites/http-response-constructor';

export const nativeHttpClient: Partial<HttpClient> = {
  get: async <T>(url: string, {headers = {}}) => {
    const response = await fetch(url, {headers});
    const data = await response.json();
    return httpResponseConstructor({
      url: response.url,
      headers: response.headers,
      type: response.type,
      status: response.status,
      statusText: response.statusText,
      data,
    });
  },
  request: <T>(url: string, method: HttpMethod, options: HttpRequestOptions) => {
    const httpMethodToClientRequest: Partial<Record<HttpMethod, (url: string, options: HttpRequestOptions) => Promise<HttpResponse<T>>>> = {
      GET: (url: string) => nativeHttpClient.get!(url, options),
    };
    const httpRequest = httpMethodToClientRequest[method];
    if (!httpRequest) {
      throw new Error(`Http method ${method} is not supported.`)
    }
    return httpRequest(url, options);
  },
};
