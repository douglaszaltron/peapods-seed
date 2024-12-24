import axios from 'axios';
import { type Mock, beforeEach, describe, expect, it, vi } from 'vitest';
import TokenManager from '../utils/token-manager';
import createHttpClient from './axios-http-client';

vi.mock('axios');
vi.mock('../utils/token-manager');

const baseUrl = 'https://api.example.com';
const mockAxiosInstance = {
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
  patch: vi.fn(),
  delete: vi.fn(),
  defaults: {
    headers: {
      Authorization: '',
    },
    paramsSerializer: vi.fn(),
  },
};

describe('AxiosHttpClient', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (axios.create as Mock).mockReturnValue(mockAxiosInstance);
  });

  it('deve criar uma instância com as configurações corretas', () => {
    createHttpClient({ baseURL: baseUrl });

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: baseUrl,
      timeout: 2500,
    });
  });

  it('deve fazer uma requisição GET com sucesso', async () => {
    const responseData = { data: 'test' };
    mockAxiosInstance.get.mockResolvedValue({
      data: responseData,
      status: 200,
    });

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.get('/test');

    expect(response).toEqual({
      data: responseData,
      status: 200,
    });
    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/test', {
      params: undefined,
    });
  });

  it('deve tratar erro na requisição GET', async () => {
    const error = {
      response: { data: { message: 'Erro' }, status: 400 },
    };
    mockAxiosInstance.get.mockRejectedValue(error);

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.get('/test');

    expect(response).toEqual({
      data: { message: 'Erro' },
      status: 400,
    });
  });

  it('deve fazer uma requisição POST com sucesso', async () => {
    const requestData = { name: 'test' };
    const responseData = { id: 1, ...requestData };
    mockAxiosInstance.post.mockResolvedValue({
      data: responseData,
      status: 201,
    });

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.post('/test', requestData);

    expect(response).toEqual({
      data: responseData,
      status: 201,
    });
    expect(mockAxiosInstance.post).toHaveBeenCalledWith('/test', requestData);
  });

  it('deve fazer uma requisição PUT com sucesso', async () => {
    const requestData = { name: 'test' };
    const responseData = { ...requestData };
    mockAxiosInstance.put.mockResolvedValue({
      data: responseData,
      status: 200,
    });

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.put('/test', requestData);

    expect(response).toEqual({
      data: responseData,
      status: 200,
    });
    expect(mockAxiosInstance.put).toHaveBeenCalledWith('/test', requestData);
  });

  it('deve fazer uma requisição PATCH com sucesso', async () => {
    const requestData = { name: 'test' };
    const responseData = { ...requestData };
    mockAxiosInstance.patch.mockResolvedValue({
      data: responseData,
      status: 200,
    });

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.patch('/test', requestData);

    expect(response).toEqual({
      data: responseData,
      status: 200,
    });
    expect(mockAxiosInstance.patch).toHaveBeenCalledWith('/test', requestData);
  });

  it('deve fazer uma requisição DELETE com sucesso', async () => {
    mockAxiosInstance.delete.mockResolvedValue({ data: null, status: 204 });

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.delete('/test');

    expect(response).toEqual({
      data: null,
      status: 204,
    });
    expect(mockAxiosInstance.delete).toHaveBeenCalledWith('/test');
  });

  it('deve tratar erro com array de erros', async () => {
    const error = {
      response: {
        data: [{ message: 'Erro 1' }, { message: 'Erro 2' }],
        status: 400,
      },
    };
    mockAxiosInstance.post.mockRejectedValue(error);

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.post('/test', {});

    expect(response).toEqual({
      data: { message: 'Erro 1' },
      status: 400,
    });
  });

  it('deve tratar erro com objeto de erro', async () => {
    const error = {
      response: {
        data: { message: 'Erro de validação' },
        status: 400,
      },
    };
    mockAxiosInstance.post.mockRejectedValue(error);

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.post('/test', {});

    expect(response).toEqual({
      data: { message: 'Erro de validação' },
      status: 400,
    });
  });

  it('deve tratar erro desconhecido', async () => {
    const error = new Error('Erro inesperado');
    mockAxiosInstance.get.mockRejectedValue(error);

    const client = createHttpClient({ baseURL: baseUrl });
    const response = await client.get('/test');

    expect(response).toEqual({
      data: { message: 'Erro interno do servidor' },
      status: 500,
    });
  });

  it('deve adicionar o token de autenticação', () => {
    vi.mocked(TokenManager.getToken).mockReturnValue('token-123');

    createHttpClient({ baseURL: baseUrl });

    expect(mockAxiosInstance.defaults.headers.Authorization).toBe(
      'Bearer token-123'
    );
  });

  it('deve serializar os parâmetros da requisição', () => {
    const client = createHttpClient({ baseURL: baseUrl });
    const params = { filter: { name: 'test' } };

    client.get('/test', params);

    expect(mockAxiosInstance.defaults.paramsSerializer).toBeDefined();
    const serializedParams =
      mockAxiosInstance.defaults.paramsSerializer(params);
    expect(serializedParams).toContain('filter.name=test');
  });
});
