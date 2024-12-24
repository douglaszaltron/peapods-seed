export const HttpStatusCode = {
  ok: 200,
  created: 201,
  noContent: 204,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
  serviceUnavailable: 503,
  badGateway: 502,
} as const;

export type HttpMethod = 'post' | 'get' | 'put' | 'patch' | 'delete';

export interface HttpRequest {
  url: string;
  method: HttpMethod;
  body?: unknown;
  headers?: unknown;
}

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
}

export interface HttpClient {
  get<T>(url: string, params?: unknown): Promise<HttpResponse<T>>;
  post<T>(url: string, data: unknown): Promise<HttpResponse<T>>;
  put<T>(url: string, data: unknown): Promise<HttpResponse<T>>;
  patch<T>(url: string, data: unknown): Promise<HttpResponse<T>>;
  delete<T>(url: string): Promise<HttpResponse<T>>;
}

export interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
}

export interface PageMeta<T = []> {
  meta: {
    page: {
      limit: number;
      offset: number;
      count?: number;
      total?: number;
    };
  };
  results: T[];
}

export interface ErrorInfo {
  slug: string;
  message: string;
  location?: string;
  field?: string;
}

export interface ApiException {
  slug: string;
  message: string;
  details?: ErrorInfo[];
}

export type ApiResponse<T> = Promise<HttpResponse<T>>;
