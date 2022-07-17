interface FetchError extends Error {
  status: number;
  statusText: string;
}

export interface FetchResult<T> {
  data?: T;
  isLoading: boolean;
  error?: unknown;
}
