import React, {useCallback} from 'react';

import {HttpContext} from '../contexts/http-context';
import {FetchOperation, FetchResult} from '../models/fetch-result.interface';
import {HttpMethod} from '../types/http-method';
import {HttpRequestOptions} from '../models/http-request-options';

export type FetchOperationOptions = {
  readonly url: string;
  readonly method: HttpMethod;
  readonly headers?: HeadersInit;
  readonly body?: Record<string, any>;
  readonly params?: Record<string, unknown>;
};

export const useFetch = <T>(hookOptions?: Partial<FetchOperationOptions>): FetchResult<T> => {
  const {client, interceptors: {request: requestInterceptors = []}} = React.useContext(HttpContext);
  const [data, setData] = React.useState<T>();
  const [error, setError] = React.useState<Error>();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const operation = useCallback(async (operationOptions: FetchOperationOptions) => {
    const {url, method, headers, body, params} = {...hookOptions, ...operationOptions};
    try {
      const request = requestInterceptors.reduce((interceptedRequest, interceptor) => interceptor({url, method, options: interceptedRequest}), {headers, body, params} as HttpRequestOptions);
      const response = await client.request<T>(url, method, request);
      const data = response.data;
      setData(data);
      return data;
    } catch (error) {
      setError(new Error('Fetch error.'));
    } finally {
      setIsLoaded(false);
    }
  }, [client, hookOptions, requestInterceptors]) as FetchOperation<T>;
  return {data, isLoaded, error, operation};
};
