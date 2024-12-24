import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { stringify } from 'qs';
import handleError from '../error/handler-error';
import type {
  HttpClient,
  HttpClientConfig,
  HttpResponse,
} from '../interfaces/http-client';
import tokenManager from '../utils/token-manager';

/**
 * Cria uma instância do cliente Axios com as configurações base
 */
const createAxiosInstance = ({
  baseURL,
  timeout = 2500,
}: HttpClientConfig): AxiosInstance => {
  const token = tokenManager.getToken();

  const instance = axios.create({
    baseURL,
    timeout,
  });

  instance.defaults.paramsSerializer = (params) => {
    const options = { allowDots: true, skipNulls: true };
    return stringify(params, options);
  };

  if (token) {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return instance;
};

/**
 * Cria um cliente HTTP usando Axios
 */
const createHttpClient = (config: HttpClientConfig): HttpClient => {
  const instance = createAxiosInstance(config);

  const handleRequest = async <T>(
    fn: () => Promise<AxiosResponse>
  ): Promise<HttpResponse<T>> => {
    try {
      const response = await fn();
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      return handleError<T>(error);
    }
  };

  return {
    get: <T>(url: string, params?: unknown) => {
      return handleRequest<T>(() => instance.get(url, { params }));
    },

    post: <T>(url: string, data: unknown) => {
      return handleRequest<T>(() => instance.post(url, data));
    },

    put: <T>(url: string, data: unknown) => {
      return handleRequest<T>(() => instance.put(url, data));
    },

    patch: <T>(url: string, data: unknown) => {
      return handleRequest<T>(() => instance.patch(url, data));
    },

    delete: <T>(url: string) => {
      return handleRequest<T>(() => instance.delete(url));
    },
  };
};

export default createHttpClient;
