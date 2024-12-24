import { describe, expect, it } from 'vitest';
import handleError from './handler-error';

describe('handleError', () => {
  it('deve lançar um erro com valores padrão quando receber um erro desconhecido', () => {
    const error = new Error('Exemplo de erro');
    expect(() => handleError(error)).toThrow('Exemplo de erro');
  });

  it('deve lançar um erro com dados do objeto de erro', () => {
    const errorData = {
      slug: 'CUSTOM_ERROR',
      message: 'Mensagem personalizada',
    };

    const axiosError = {
      response: {
        data: errorData,
      },
    };

    expect(() => handleError(axiosError)).toThrow('Mensagem personalizada');
  });

  it('deve lançar um erro com dados do primeiro item quando receber array', () => {
    const errorData = [
      {
        slug: 'ARRAY_ERROR',
        message: 'Erro do array',
      },
    ];

    const axiosError = {
      response: {
        data: errorData,
      },
    };

    expect(() => handleError(axiosError)).toThrow('Erro do array');
  });

  it('deve lançar um erro com valores padrão quando receber array vazio', () => {
    const axiosError = {
      response: {
        data: [],
      },
    };

    expect(() => handleError(axiosError)).toThrow('Erro desconhecido');
  });
});
