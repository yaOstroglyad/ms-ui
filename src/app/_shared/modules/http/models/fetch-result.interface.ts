import {FetchOperationOptions} from '../hooks/use-http';

interface FetchError extends Error {
  status: number;
  statusText: string;
}

export type FetchOperation<T> = (options: Omit<FetchOperationOptions, 'url' | 'method'>) => Promise<T> | never;

export interface FetchResult<T> {
  data?: T;
  isLoaded: boolean;
  error?: unknown;
  operation: FetchOperation<T>;
}
