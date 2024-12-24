import type { ApiException, HttpResponse } from '../interfaces/http-client';
import { ApiError } from './api-error';

export const mocksErrors = [
  {
    message: 'error',
  },
];

export const mocksHttpErros = [
  {
    response: {
      data: { message: 'error' },
    },
  },
  {
    response: {
      data: { message: 'error', slug: 'error' },
    },
  },
  {
    response: {
      data: [{ message: 'error' }],
    },
  },
  {
    response: {
      data: [{ message: 'error', slug: 'error' }],
    },
  },
];

export const parseError = (error: unknown): string => {
  let message = 'An error occurred';

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = error.message as string;
  } else {
    message = String(error);
  }

  return message;
};

const isObject = (thing: unknown) => {
  return thing !== null && typeof thing === 'object';
};

const isHttpError = (payload: unknown) => {
  return (
    isObject(payload) &&
    'response' in payload &&
    isObject(payload.response) &&
    'data' in payload.response &&
    (isObject(payload.response.data) || Array.isArray(payload.response.data))
  );
};

const getErrorData = (error: ApiException) => {
  const base = {
    slug: 'UNKNOWN',
    message: 'Erro desconhecido',
  };
  return {
    slug: error.slug ?? base.slug,
    message: error.message ?? base.message,
  };
};

// biome-ignore lint/suspicious/noExplicitAny: Safe to use since this error may come from a try catch
const handleError = <T>(error: any): HttpResponse<T> => {
  const { slug, message } = getErrorData(error);

  if (!isHttpError(error)) {
    throw new ApiError(slug, message);
  }

  const data = error.response?.data;

  if (data && typeof data === 'object' && !Array.isArray(data)) {
    const { slug, message } = getErrorData(data);
    throw new ApiError(slug, message);
  }

  if (Array.isArray(data) && data.length > 0) {
    const { slug, message } = getErrorData(data[0]);
    throw new ApiError(slug, message);
  }

  throw new ApiError(slug, message);
};

export default handleError;
