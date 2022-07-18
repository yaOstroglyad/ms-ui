import {HttpMethod} from '../types/http-method';

import {HttpResponse} from './http-response';
import {HttpRequestOptions} from './http-request-options';

type HttpRequestInterceptor = ({url, method, options}: {url: string, method: HttpMethod, options: HttpRequestOptions}) => HttpRequestOptions;
type HttpResponseInterceptor = <T>({response}: {response: HttpResponse<T>}) => Promise<HttpResponse<T>>;

export interface HttpInterceptors {
  readonly request?: HttpRequestInterceptor[];
  readonly response?: HttpResponseInterceptor[];
}
