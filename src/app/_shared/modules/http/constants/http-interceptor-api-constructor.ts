import {HttpInterceptorApi} from '../models/http-interceptors';

export const httpInterceptorApiConstructor = <Interceptor>(): HttpInterceptorApi<Interceptor> => {
  const interceptors: Interceptor[] = [];
  return {
    add: (interceptor) => {
      interceptors.push(interceptor);
    },
    forEach: (fn) => {
      interceptors.forEach(i => {
        if (i) {
          fn(i);
        }
      });
    },
  }
};
