import React from 'react';

import {HttpContext} from '../contexts/http-context';
import {FetchResult} from '../models/fetch-result.interface';
import {HttpMethod} from '../types/http-method';
import {HttpRequestOptions} from '../models/http-request-options';

type UseFetchOptions = {
  readonly url: string;
  readonly method: HttpMethod;
  readonly headers?: HeadersInit;
  readonly body?: BodyInit;
  readonly params?: Record<string, unknown>;
  readonly responseMapper?: <R, T>(response: R) => T;
};

export const useFetch = <T>(options: UseFetchOptions): FetchResult<T> => {
  const {client, interceptors: {request: requestInterceptors = []}} = React.useContext(HttpContext);
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<Error>();
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchData = async ({url, method, headers, body, params}: UseFetchOptions) => {
    try {
      const request = requestInterceptors.reduce((interceptedRequest, interceptor) => interceptor({url, method, options: interceptedRequest}), {headers, body, params} as HttpRequestOptions);
      const response = await client.request<T>(url, method, request);
      setData(response.data);
    } catch (error) {
      setError(new Error('Fetch error.'));
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    fetchData(options);
  }, []);
  return {data, error, isLoading};
};
