export interface HttpRequestOptions {
  readonly body?: BodyInit;
  readonly headers?: HeadersInit;
  readonly params?: Record<string, unknown>;
}
