import {FetchOperationOptions} from '../hooks/use-fetch';

interface FetchError extends Error {
  status: number;
  statusText: string;
}

export type FetchOperation<T> = (options: FetchOperationOptions) => Promise<T> | never;

export interface FetchResult<T> {
  data?: T;
  isLoaded: boolean;
  error?: unknown;
  operation: FetchOperation<T>;
}
